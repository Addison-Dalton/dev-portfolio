import { Routes as RRRoutes, Route } from 'react-router-dom';

import { HomePage } from 'pages';

const Routes = () => (
  <RRRoutes>
    <Route path="/" element={<HomePage />} />
  </RRRoutes>
);

export default Routes;
