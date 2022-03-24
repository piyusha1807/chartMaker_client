import React from 'react';
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Stack,
  TextField,
  FormControlLabel,
  //   ToggleButtonGroup,
  //   ToggleButton,
  Checkbox,
  Switch,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Common = (props: any) => {
  const { layout, setLayout } = props;

  const handleCanvasChange = (type: any, value: any) => {
    setLayout({ ...layout, [type]: value });
  };

  const handleCanvasLegendChange = (type: any, value?: any) => {
    const newObj = { ...layout };
    newObj.legend[type] = value;
    setLayout(newObj);
  };

  const handleCanvasXAxisChange = (type: any, value?: any) => {
    const newObj = { ...layout };
    newObj.xaxis[type] = value;
    setLayout(newObj);
  };

  const handleCanvasYAxisChange = (type: any, value?: any) => {
    const newObj = { ...layout };
    newObj.yaxis[type] = value;
    setLayout(newObj);
  };

  //   const handleLegend = () => {
  //     setLegend(!legend);
  //   };

  //   const handleTooltip = () => {
  //     setTooltip(!tooltip);
  //   };

  //   const handleAlignment = (
  //     event: React.MouseEvent<HTMLElement>,
  //     newAlignment: string | null
  //   ) => {
  //     setAlignment(newAlignment);
  //   };

  return (
    <>
      <Accordion disableGutters>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="canvas" id="canvas">
          <Typography>Canvas</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={2}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              spacing={2}
              // sx={{ my: 1 }}
            >
              <Typography>Size</Typography>
              <TextField
                id="outlined-number"
                label="Width"
                type="number"
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
                value={layout?.width}
                onChange={(e) => handleCanvasChange('width', e.target.value)}
              />
              <TextField
                id="outlined-number"
                label="Height"
                type="number"
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
                value={layout?.height}
                onChange={(e) => handleCanvasChange('height', e.target.value)}
              />
            </Stack>

            <TextField
              id="outlined-number"
              label="Title"
              size="small"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              value={layout?.title?.text}
              onChange={(e) => handleCanvasChange('title', e.target.value)}
            />

            <TextField
              id="outlined-number"
              label="X Axis"
              size="small"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              value={layout?.xaxis?.title?.text}
              onChange={(e) => handleCanvasXAxisChange('title', e.target.value)}
            />

            <TextField
              id="outlined-number"
              label="Y Axis"
              size="small"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              value={layout?.yaxis?.title?.text}
              onChange={(e) => handleCanvasYAxisChange('title', e.target.value)}
            />
          </Stack>
        </AccordionDetails>
      </Accordion>

      <Accordion disableGutters>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="legend" id="legend">
          <Typography>Legend</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel
            control={
              <Switch
                checked={layout?.showlegend}
                onChange={(e) => {
                  handleCanvasChange('showlegend', e.target.checked);
                }}
              />
            }
            label="Show Legend"
          />
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={2}
            // sx={{ my: 1 }}
          >
            <Typography>Position</Typography>
            <TextField
              id="outlined-number"
              label="X"
              type="number"
              size="small"
              inputProps={{
                step: '0.1',
                min: '-1.0',
                max: '1.0',
              }}
              InputLabelProps={{
                shrink: true,
              }}
              value={layout?.legend?.x}
              onChange={(e) => {
                handleCanvasLegendChange('x', e.target.value);
              }}
            />

            <TextField
              id="outlined-number"
              label="Y"
              type="number"
              size="small"
              inputProps={{
                step: '0.1',
                min: '-1.0',
                max: '1.0',
              }}
              InputLabelProps={{
                shrink: true,
              }}
              value={layout?.legend?.y}
              onChange={(e) => handleCanvasLegendChange('y', e.target.value)}
            />
          </Stack>
          {/* <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={2}
            sx={{ my: 1 }}
          >
            <Typography>Orientation</Typography>
            <ToggleButtonGroup
              exclusive
              size="small"
              value={layout?.legend?.orientation}
              onChange={(_, value) => {
                handleCanvasLegendChange('orientation', value);
              }}
              aria-label="text alignment"
            >
              <ToggleButton value="v" aria-label="Vertical">
                Vertical
              </ToggleButton>
              <ToggleButton value="h" aria-label="Horizontal">
                Horizontal
              </ToggleButton>
            </ToggleButtonGroup>
          </Stack> */}
        </AccordionDetails>
      </Accordion>

      <Accordion disableGutters>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="shape data"
          id="shape-data"
        >
          <Typography>Shape data</Typography>
        </AccordionSummary>
        <AccordionDetails>d</AccordionDetails>
      </Accordion>

      <Accordion disableGutters>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="Graphic" id="Graphic">
          <Typography>Graphic</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={2}
            sx={{ my: 1 }}
          >
            <Typography>Thickness</Typography>
            <TextField
              id="outlined-number"
              label="Thickness"
              type="number"
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Stack>
          <Stack>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Smooth" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Show point" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Show label" />
          </Stack>
        </AccordionDetails>
      </Accordion>

      <FormControlLabel control={<Switch defaultChecked />} label="Show Tooltip" />
    </>
  );
};

export default Common;
