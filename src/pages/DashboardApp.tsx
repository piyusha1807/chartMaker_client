import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Stack, Link } from '@mui/material';
import Page from '../components/Page';

const DashboardApp = () => {
  return (
    <Page title="Dashboard" dMeta="Create chart, map and table" kMeta="instant chart, map, table">
      <Stack spacing={2} direction="row">
        <Card sx={{ maxWidth: 350, padding: '20px' }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="/static/images/chart.png"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Chart
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Use one of 6 interactive and responsive chart types raging from simple bars and lines
              to arrow and scatter plots.
            </Typography>
          </CardContent>
          <CardActions>
            <Link
              underline="none"
              variant="subtitle2"
              component={RouterLink}
              to="/create/chart/new/upload"
            >
              Get started
            </Link>
            <Link underline="none" variant="subtitle2" component={RouterLink} to="/dashboard">
              Learn More
            </Link>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, padding: '20px' }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="/static/images/map.png"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Map
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Three interactive & responsive map types let you create anything from locator maps to
              symbol maps.
            </Typography>
          </CardContent>
          <CardActions>
            <Link
              underline="none"
              variant="subtitle2"
              component={RouterLink}
              to="/create/map/new/upload"
            >
              Get started
            </Link>
            <Link underline="none" variant="subtitle2" component={RouterLink} to="/dashboard">
              Learn More
            </Link>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, padding: '20px' }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="/static/images/table.png"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Table
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Responsive data tables allow for lots of styling options and let you include column,
              search bar and pagination.
            </Typography>
          </CardContent>
          <CardActions>
            <Link
              underline="none"
              variant="subtitle2"
              component={RouterLink}
              to="/create/table/new/upload"
            >
              Get started
            </Link>
            <Link underline="none" variant="subtitle2" component={RouterLink} to="/dashboard">
              Learn More
            </Link>
          </CardActions>
        </Card>
      </Stack>
    </Page>
  );
};

export default DashboardApp;
