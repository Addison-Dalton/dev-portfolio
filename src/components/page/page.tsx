import { FC, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

type PageProps = {
  children: ReactNode;
};

const topmargin = { base: '1.5rem', md: '3rem', lg: '4rem' };
const leftRightMargin = { base: '1.5rem', md: '6rem', lg: '10rem' };

const Page: FC<PageProps> = ({ children }) => (
  <Box
    display="flex"
    flexDirection="column"
    position="relative"
    minHeight={{
      base: 'calc(100vh - 1.5rem)',
      md: 'calc(100vh - 3rem)',
      lg: 'calc(100vh - 4rem)'
    }}
    mt={topmargin}
    ml={leftRightMargin}
    mr={leftRightMargin}
  >
    {children}
  </Box>
);

export default Page;
