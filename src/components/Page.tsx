import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import React, { forwardRef } from 'react';
// material
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

const Page = forwardRef(({ children, title = '', ...other }: any, ref) => (
  <Box ref={ref} {...other}>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    {children}
  </Box>
));

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default Page;