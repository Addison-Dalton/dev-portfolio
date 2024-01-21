import { FC, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

import Lines from 'assets/icons/lines.svg';

type PageProps = {
  hideLineArt?: boolean;
  children: ReactNode;
};

const topmargin = { base: '1.5rem', md: '3rem', lg: '4rem' };
const leftRightMargin = { base: '1.5rem', md: '6rem', lg: '10rem' };

const Page: FC<PageProps> = ({ children, hideLineArt }) => (
  <Box
    display="flex"
    flexDirection="column"
    position="relative"
    minHeight={{
      base: 'calc(100dvh - 1.5rem)',
      md: 'calc(100dvh - 3rem)',
      lg: 'calc(100dvh - 4rem)'
    }}
    mt={topmargin}
    ml={leftRightMargin}
    mr={leftRightMargin}
  >
    {!hideLineArt && (
      <Box
        position="absolute"
        top="5.5rem"
        // the negative rems is to offset the art from the page margin
        left={{
          base: 'calc(0px - 2rem)',
          md: 'calc(0px - 6rem)',
          lg: 'calc(0px - 10rem)'
        }}
      >
        <Lines />
      </Box>
    )}
    {children}
  </Box>
);

export default Page;
