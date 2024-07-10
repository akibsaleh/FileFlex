'use client';

import { addFiles, getAllFiles } from '@/lib/features/filesSlice';
import { Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

type File = {
  id: string;
  userId: string;
  email: string;
  url: string;
  fileType: string;
  fileName: string;
  fileSize: number;
  createdAt: string;
  updatedAt: string;
};

const FileList = ({ files }: { files: File[] }) => {
  const dispatch = useDispatch();
  const allFiles = useSelector(getAllFiles);
  const loadFiles = React.useCallback(() => {
    dispatch(addFiles(files));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files]);

  React.useEffect(() => {
    loadFiles();
  }, [loadFiles]);

  if (files.length === 0) return <Typography>No file found</Typography>;
  return <div>{allFiles.length}</div>;
};

export default FileList;
