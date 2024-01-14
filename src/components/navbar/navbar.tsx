import { Box } from '@chakra-ui/react';
import Logo from 'assets/icons/logo.svg';

import Link from './navbar-link';
import LinkList from './link-list';
import MobileNavbar from './mobile';

const Navbar = () => (
  <Box
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    marginBottom={{ base: '8rem', lg: '10rem' }}
  >
    <Link to="/" underline={false}>
      <Logo />
    </Link>
    <LinkList display={{ base: 'none', lg: 'flex' }} flexDirection="row" />
    <MobileNavbar />
  </Box>
);

export default Navbar;
