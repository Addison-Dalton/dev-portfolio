import { FC } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react';

type Props = LinkProps & { to: string }

const Link: FC<Props> = (props) => (
  <ChakraLink {...props} as={ReactRouterLink} />
);

export default Link;
