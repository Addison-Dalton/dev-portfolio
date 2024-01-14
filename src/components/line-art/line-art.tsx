import { Box } from '@chakra-ui/react';

import Lines1 from 'assets/icons/lines-row1.svg';
import Lines2 from 'assets/icons/lines-row2.svg';
import Lines3 from 'assets/icons/lines-row3.svg';

const LineArt = () => (
  <Box position="relative">
    <Box position="absolute">
      <Lines1 />
    </Box>
    <Box position="absolute">
      <Lines2 />
    </Box>
    <Box position="absolute">
      <Lines3 />
    </Box>
  </Box>
);

export default LineArt;
