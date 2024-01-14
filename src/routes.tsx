import { Box } from '@chakra-ui/react';
import { Routes as RRRoutes, Route } from 'react-router-dom';

import { HomePage } from 'pages';

const Routes = () => (
  <Box as="article" flex={1}>
    <RRRoutes>
      <Route path="/" element={<HomePage />} />
    </RRRoutes>
  </Box>
);

export default Routes;
