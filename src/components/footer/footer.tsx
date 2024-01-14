import { Box, Icon, List, ListItem, Link } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <Box as="footer" width="100%" padding="1rem 0" display="flex" justifyContent="flex-end">
    <List display="flex" flexDirection="row" gap={5}>
      <ListItem>
        <Link
          href="https://github.com/Addison-Dalton"
          title="Addison Dalton's Github link"
        >
          <Icon boxSize={6} as={FaGithub} />
        </Link>
      </ListItem>
      <ListItem>
        <Link
          href="https://www.linkedin.com/in/addison-dalton-914b44109"
          title="Addison Dalton's LinkedIn link"
        >
          <Icon boxSize={6} as={FaLinkedin} />
        </Link>
      </ListItem>
    </List>
  </Box>
);

export default Footer;
