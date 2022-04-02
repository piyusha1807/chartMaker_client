import React, { useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import { SketchPicker } from 'react-color';

const iconList = [
  { name: 'bar', titleName: 'Bar', path: '/static/images/bar.png' },
  { name: 'pie', titleName: 'Pie', path: '/static/images/pie.png' },
  { name: 'donut', titleName: 'Donut', path: '/static/images/pie.png' },
  { name: 'scatter', titleName: 'Scatter', path: '/static/images/scatter.png' },
  { name: 'donut', titleName: 'Donut', path: '/static/images/donut.png' },
  { name: 'area', titleName: 'Area', path: '/static/images/area.png' },
  { name: 'lines', titleName: 'Lines', path: '/static/images/area.png' },
  { name: 'stacked_column', titleName: 'Stacked Column', path: '/static/images/area.png' },
];

const Structure = (props: any) => {
  const { result, trace, setTrace, layout, setLayout } = props;

  const [chartModal, setChartModal] = useState(false);

  const handleDropdownChange = (value: string, index: number, type: string, typeValue: string) => {
    const newArr = [...trace];
    newArr[index][type] = result[value];
    newArr[index][typeValue] = value;
    setTrace(newArr);
  };

  const handleChartChange = (chartType: string, index: number, value: string) => {
    const newArr = [...trace];
    if (chartType === 'scatter') {
      newArr[index].type = 'scatter';
      newArr[index].mode = 'markers';
    } else if (chartType === 'lines') {
      newArr[index].type = 'scatter';
      newArr[index].mode = 'lines+markers';
    } else if (chartType === 'pie') {
      newArr[index].type = 'pie';
      newArr[index].hole = '0';
    } else if (chartType === 'donut') {
      newArr[index].type = 'pie';
      newArr[index].hole = '.4';
    } else if (chartType === 'stacked_column') {
      newArr[index].type = 'bar';
      setLayout({ ...layout, barmode: 'stack' });
    } else {
      newArr[index].type = chartType;
    }
    newArr[index].typeValue = value;
    setTrace(newArr);
    setChartModal(false);
  };

  const handleColorChange = (value: string, index: number) => {
    const newArr = [...trace];
    newArr[index].marker.color = value;
    setTrace(newArr);
  };

  const handleShowColorPicker = (index: number) => {
    const newArr = [...trace];
    newArr[index].showColorPicker = !newArr[index].showColorPicker;
    setTrace(newArr);
  };

  const addTrace = () => {
    setTrace([
      ...trace,
      {
        x: [],
        y: [],
        xValue: '',
        yValue: '',
        typeValue: 'Bar',
        type: 'bar',
        mode: 'markers',
        marker: { color: '#483c84' },
      },
    ]);
  };

  const handleChartModal = () => {
    setChartModal(true);
  };

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'row', p: 2 }}>
        <Typography style={{ verticalAlign: 'middle', lineHeight: '35px' }}>Add Traces</Typography>
        <Box sx={{ flex: '1 1 auto' }} />
        <Button variant="outlined" onClick={addTrace}>
          <AddIcon /> Trace
        </Button>
      </Box>
      {trace &&
        trace.map((item: any, index: number) => {
          return (
            <Accordion defaultExpanded disableGutters>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="shape data"
                id="shape-data"
              >
                <Typography>{`Trace ${index}`}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Stack spacing={2}>
                  <TextField
                    label="Chart Type"
                    value={item.typeValue}
                    onClick={handleChartModal}
                    size="small"
                  />
                  <Dialog open={chartModal} onClose={() => setChartModal(false)}>
                    <DialogTitle>Select Chart type</DialogTitle>
                    <DialogContent>
                      <Box
                        sx={{
                          display: 'flex',
                          '& > :not(style)': {
                            m: 1,
                            width: 128,
                            height: 128,
                          },
                        }}
                      >
                        {iconList.map((item, idx) => {
                          return (
                            <Paper
                              variant="outlined"
                              onClick={() => {
                                handleChartChange(item.name, index, item.titleName);
                              }}
                              style={{ textAlign: 'center', padding: '0.5em' }}
                              key={idx}
                            >
                              <img
                                src={item.path}
                                alt={item.titleName}
                                style={{ margin: 'auto' }}
                              />
                              <Typography style={{ marginTop: '0.5em' }}>
                                {item.titleName}
                              </Typography>
                            </Paper>
                          );
                        })}
                      </Box>
                    </DialogContent>
                  </Dialog>
                  {item.type === 'pie' || item.type === 'donut' ? (
                    <>
                      <TextField
                        select
                        size="small"
                        label="Labels"
                        value={item.lValue}
                        onChange={(e) => {
                          handleDropdownChange(e.target.value, index, 'labels', 'lValue');
                        }}
                      >
                        {Object.keys(result).map((key) => (
                          <MenuItem value={key}>{key}</MenuItem>
                        ))}
                      </TextField>
                      <TextField
                        select
                        size="small"
                        label="Values"
                        value={item.vValue}
                        onChange={(e) => {
                          handleDropdownChange(e.target.value, index, 'values', 'vValue');
                        }}
                      >
                        {Object.keys(result).map((key) => (
                          <MenuItem value={key}>{key}</MenuItem>
                        ))}
                      </TextField>
                    </>
                  ) : (
                    <>
                      <TextField
                        select
                        size="small"
                        label="X"
                        value={item.xValue}
                        onChange={(e) => {
                          handleDropdownChange(e.target.value, index, 'x', 'xValue');
                        }}
                      >
                        {Object.keys(result).map((key) => (
                          <MenuItem value={key}>{key}</MenuItem>
                        ))}
                      </TextField>
                      <TextField
                        select
                        size="small"
                        label="Y"
                        value={item.yValue}
                        onChange={(e) => {
                          handleDropdownChange(e.target.value, index, 'y', 'yValue');
                        }}
                      >
                        {Object.keys(result).map((key) => (
                          <MenuItem value={key}>{key}</MenuItem>
                        ))}
                      </TextField>
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        spacing={2}
                        sx={{ my: 1 }}
                      >
                        <Typography>Color: </Typography>
                        <Box
                          sx={{
                            width: 80,
                            height: 35,
                            backgroundColor: item.marker.color,
                            borderRadius: '5px',
                          }}
                          onClick={() => handleShowColorPicker(index)}
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
                            {item.marker.color}
                          </p>
                        </Box>
                      </Stack>
                      {item.showColorPicker && (
                        <SketchPicker
                          color={item.marker.color}
                          onChange={(e) => handleColorChange(e.hex, index)}
                        />
                      )}
                    </>
                  )}
                </Stack>
              </AccordionDetails>
            </Accordion>
          );
        })}
    </>
  );
};

export default Structure;
