import { FC, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

type PageProps = {
  children: ReactNode;
};

const topmargin = { sm: '2rem', md: '4rem' };
const leftRightMargin = { sm: '2rem', md: '10rem' };

const Page: FC<PageProps> = ({ children }) => (
  <Box
    display="flex"
    flexDirection="column"
    position="relative"
    minHeight={{ sm: 'calc(100vh - 2rem)', md: 'calc(100vh - 4rem)' }}
    mt={topmargin}
    ml={leftRightMargin}
    mr={leftRightMargin}
  >
    {children}
  </Box>
);

export default Page;
