'use client';
import { Box } from '@mui/material';
import React from 'react';
import { Layer, Rect, Stage } from 'react-konva';

const KonvaStage = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = React.useState(0);
  const [reactColor, setRectColor] = React.useState<'red' | 'blue'>('red');
  React.useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);
  const handleRectColor = () => {
    setRectColor((prevColor) => (prevColor === 'red' ? 'blue' : 'red'));
  };
  return (
    <Box
      ref={containerRef}
      sx={{ width: '720px' }}
      display='flex'
      flexDirection='column'
      alignItems='center'
    >
      <Stage
        width={containerWidth}
        height={typeof window !== undefined ? window.innerHeight : 0}
      >
        <Layer>
          <Rect
            x={100}
            y={100}
            width={600}
            height={600}
            fill={reactColor}
            stroke='black'
            strokeWidth={4}
            draggable
            onClick={handleRectColor}
          />
        </Layer>
      </Stage>
    </Box>
  );
};

export default KonvaStage;
