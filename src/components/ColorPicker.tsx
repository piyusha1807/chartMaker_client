import React, { useState } from 'react';
import { Typography, Stack, Box } from '@mui/material';
import { SketchPicker } from 'react-color';

const ColorPicker = (props: any) => {
  const { color, setColor, property, label } = props;
  const [showColorPicker, setShowColorPicker] = useState(false);
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
        sx={{ my: 1 }}
      >
        <Typography>{label}</Typography>
        <Box
          sx={{
            width: 80,
            height: 35,
            backgroundColor: color,
            borderRadius: '5px',
          }}
          onClick={() => setShowColorPicker(!showColorPicker)}
        >
          <p
            style={{
              color: 'white',
              textAlign: 'center',
              verticalAlign: 'middle',
              lineHeight: '35px',
              cursor: 'pointer',
            }}
          >
            {color}
          </p>
        </Box>
      </Stack>
      {showColorPicker && (
        <SketchPicker color={color} onChange={(e) => setColor(e.hex, ...property)} />
      )}
    </>
  );
};

export default ColorPicker;
