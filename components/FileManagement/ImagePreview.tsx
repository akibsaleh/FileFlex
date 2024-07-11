'use client';
import { ZoomIn, ZoomOut } from '@mui/icons-material';
import { Box, IconButton, Paper } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const ImagePreview = ({ url, fileName }: { url: string; fileName: string }) => {
  const [imageSize, setImageSize] = React.useState<{
    width: number;
    height: number;
  }>({
    width: 600,
    height: 600,
  });
  const [scale, setScale] = React.useState<number>(1);
  const [position, setPosition] = React.useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const imageRef = React.useRef(null);

  const handleZoomIn = () => {
    setScale((scale) => scale + 0.1);
  };

  const handleZoomOut = () => {
    setScale((scale) => (scale > 1 ? scale - 0.1 : scale));
  };

  return (
    <Box
      width='100%'
      height='100%'
      display='flex'
      justifyContent='center'
      position='relative'
    >
      <Paper
        sx={{
          height: 'fit-content',
          width: 'fit-content',
          overflow: 'hidden',
          borderRadius: 1,
          border: '2px solid #e3e3e3',
          position: 'relative',
        }}
        elevation={2}
      >
        <Image
          src={url}
          width={imageSize.width}
          height={imageSize.height}
          alt={fileName}
          onLoadingComplete={({ naturalWidth, naturalHeight }) =>
            setImageSize({ width: naturalWidth, height: naturalHeight })
          }
          style={{ cursor: scale > 1 ? 'move' : 'auto' }}
        />
        <Box
          display='flex'
          alignItems='center'
          gap={0.5}
          sx={{ position: 'absolute', bottom: 10, left: 10 }}
        >
          <IconButton
            color='secondary'
            sx={{ backgroundColor: '#00000070' }}
            size='small'
            onClick={handleZoomIn}
          >
            <ZoomIn fontSize='small'></ZoomIn>
          </IconButton>
          <IconButton
            color='secondary'
            sx={{ backgroundColor: '#00000070' }}
            size='small'
            onClick={handleZoomOut}
          >
            <ZoomOut fontSize='small'></ZoomOut>
          </IconButton>
        </Box>
      </Paper>
    </Box>
  );
};

export default ImagePreview;
