import React, { useState } from 'react';
import { Box } from '@mui/system';
import { Button, Card, Grid, Tab, Tabs } from '@mui/material';
import { useNavigate } from 'react-router';
import _ from 'lodash';
import Plot from 'react-plotly.js';
import Structure from './Structure';
import Common from './Common';
import '../../styles/configChart.scss';

interface TabPanelProps {
  children?: React.ReactNode;
  value: string;
  selValue: string;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, selValue, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== selValue}
      id={`tabpanel-${selValue}`}
      aria-labelledby={`tab-${selValue}`}
      {...other}
    >
      {value === selValue && children}
    </div>
  );
}

const ConfigChart = (props: any) => {
  const navigate = useNavigate();
  const { data, setData } = props;

  const {
    prepareData: { header, rows },
  } = data;
  console.log('🚀 ~ file: index.tsx ~ line 39 ~ ConfigChart ~ header', header);
  const keys = _.keys(rows[0]);
  const result = _.zipObject(
    keys,
    _.map(keys, (key) => _.map(rows, key))
  );

  const [tabOption, setTabOption] = useState('structure');
  const [trace, setTrace] = useState<any>([
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
  const [layout, setLayout] = useState<any>({
    width: 650,
    height: 450,
    title: {
      text: 'Enter Chart Title',
      font: {
        size: 13,
      },
      x: -1,
      y: 2,
    },
    xaxis: {
      title: {
        text: 'X Axis',
        font: {
          size: '22',
        },
      },
      showgrid: true,
      showline: true,
      visible: true,
      gridwidth: '1',
    },
    yaxis: {
      title: {
        text: 'Y Axis',
        font: {
          size: '22',
        },
      },
      showline: false,
    },
    showlegend: true,
    legend: {
      x: 1.0,
      y: 1.0,
    },
    plot_bgcolor: '#22194D',
    paper_bgcolor: '#22194D',
  });

  const config = {
    displaylogo: false,
    responsive: true,
  };

  const handleBack = () => {
    navigate('/create/chart/new/prepare');
  };

  const handleNext = () => {
    setData({
      ...data,
      trace,
      layout,
      config,
    });
    navigate('/create/chart/new/export');
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabOption(newValue);
  };

  return (
    <Box sx={{ padding: '1rem', marginTop: '1rem' }}>
      <Grid container spacing={{ xs: 1, sm: 2, md: 2 }} height="75vh" style={{ margin: 'unset' }}>
        <Grid item sm={12} md={8}>
          <Plot data={trace} layout={layout} config={config} />
        </Grid>
        <Grid item sm={12} md={4}>
          <Card sx={{ padding: '1rem' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs
                value={tabOption}
                onChange={handleTabChange}
                allowScrollButtonsMobile
                variant="scrollable"
                scrollButtons="auto"
                aria-label="Configuration tabs"
              >
                <Tab label="Structure" value="structure" />
                <Tab label="Common" value="common" />
              </Tabs>
            </Box>
            <Box style={{ height: '62vh', overflow: 'auto' }}>
              <TabPanel value={tabOption} selValue="structure">
                <Structure
                  result={result}
                  trace={trace}
                  setTrace={setTrace}
                  layout={layout}
                  setLayout={setLayout}
                />
              </TabPanel>
              <TabPanel value={tabOption} selValue="common">
                <Common layout={layout} setLayout={setLayout} />
              </TabPanel>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button color="inherit" onClick={handleBack} sx={{ mr: 1 }}>
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button color="primary" variant="contained" onClick={handleNext}>
                Generate
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ConfigChart;
