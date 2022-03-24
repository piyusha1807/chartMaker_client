import React, { useState } from 'react';
import {
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import * as Plotly from 'plotly.js';
import Plot from 'react-plotly.js';
import { useNavigate } from 'react-router';

interface ChartNameProps {
  name: string;
  ext: 'jpeg' | 'png' | 'webp' | 'svg';
}

const ExportPublish = (props: any) => {
  const { data } = props;
  const { trace, layout, config } = data;
  const navigate = useNavigate();

  const plotId = 'plotString';

  const [chartName, setChartName] = useState<ChartNameProps>({
    name: 'chart',
    ext: 'svg',
  });

  const handleChartName = (value: any, type: string) => {
    setChartName({ ...chartName, [type]: value });
  };

  const handlSaveToOmero = () => {
    Plotly.downloadImage(plotId, {
      format: chartName.ext,
      width: layout.width,
      height: layout.height,
      filename: chartName.name,
    });
  };

  const handleBack = () => {
    navigate('/create/chart/new/config');
  };

  const handleNext = () => {
    navigate('/create/chart/new/upload');
  }

  return (
    <Box>
      <Grid container spacing={{ xs: 1, sm: 2, md: 2 }} height="68vh">
        <Grid item sm={12} md={8}>
          <Plot data={trace} layout={layout} config={config} divId={plotId} />
        </Grid>
        <Grid item sm={12} md={4}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={0.1}
            sx={{ my: 1 }}
          >
            <TextField
              size="small"
              label="Chart name"
              value={chartName?.name}
              onChange={(e: any) => handleChartName(e.target.value, 'name')}
            />
            <Typography variant="h6">.</Typography>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
              <Select
                size="small"
                value={chartName?.ext}
                onChange={(e: any) => handleChartName(e.target.value, 'ext')}
                autoWidth
              >
                <MenuItem value="jpeg">jpeg</MenuItem>
                <MenuItem value="png">png</MenuItem>
                <MenuItem value="webp">webp</MenuItem>
                <MenuItem value="svg">svg</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <Button
            color="primary"
            variant="contained"
            onClick={handlSaveToOmero}
          >
            Download
          </Button>
        </Grid>
      </Grid>

      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
        <Button color="inherit" onClick={handleBack} sx={{ mr: 1 }}>
          Back
        </Button>
        <Box sx={{ flex: '1 1 auto' }} />
        <Button color="primary" variant="contained" onClick={handleNext}>
          Create new
        </Button>
      </Box>
    </Box>
  );
};

export default ExportPublish;
