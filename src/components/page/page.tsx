import { FC, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

type PageProps = {
  children: ReactNode;
};

const Page: FC<PageProps> = ({ children }) => <Box bg="Background.500">{children}</Box>;

export default Page;
