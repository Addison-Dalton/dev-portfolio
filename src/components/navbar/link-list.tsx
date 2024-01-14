import { FC } from 'react';
import { List, ListItem, ListProps } from '@chakra-ui/react';

import Link from './navbar-link';

type LinkListProps = ListProps & {
  includeHome?: boolean;
};

const LinkList: FC<LinkListProps> = ({ includeHome = false, ...props }) => (
  <List gap={12} {...props}>
    {includeHome && (
      <ListItem>
        <Link to="/">Home</Link>
      </ListItem>
    )}
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
);

export default LinkList;
