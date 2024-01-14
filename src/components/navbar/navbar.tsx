import { Box, List, ListItem } from '@chakra-ui/react';
import Link from './navbar-link';

import Logo from 'assets/icons/logo.svg';

const Navbar = () => (
  <Box
    display="flex"
    justifyContent="space-between"
    alignContent="center"
    marginBottom={{ sm: '7rem', md: '10rem' }}
  >
    <Link to="/" underline={false}>
      <Logo />
    </Link>
    <List display="flex" flexDirection="row" gap={12}>
      <ListItem>
        <Link to="/about">About</Link>
      </ListItem>
      <ListItem>
        <Link to="/projects">Projects</Link>
      </ListItem>
      <ListItem>
        {/* TODO - might rename to experience. Could include my work history idea, and certs */}
        <Link to="/resume">Resume</Link>
      </ListItem>
      <ListItem>
        <Link to="/Baking">baking</Link>
      </ListItem>
      <ListItem>
        <Link to="/ants">Ants</Link>
      </ListItem>
    </List>
  </Box>
);

export default Navbar;
