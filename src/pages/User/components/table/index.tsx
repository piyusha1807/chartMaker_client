import React from 'react';
import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Card, Stack, Button, Container, Typography } from '@mui/material';
// components
import Page from '../../../../components/Page';
import Scrollbar from '../../../../components/Scrollbar';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

const UserTable = () => {
  return (
    <Page title="User">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            User
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="#"
            startIcon={<Icon icon={plusFill} />}
          >
            New User
          </Button>
        </Stack>

        <Card>
          <Scrollbar>Hs</Scrollbar>
        </Card>
      </Container>
    </Page>
  );
};

export default UserTable;
