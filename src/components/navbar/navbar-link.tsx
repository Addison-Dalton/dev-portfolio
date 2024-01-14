import { FC, ReactNode } from 'react';
import Link from 'components/link';

type NavbarLinkProps = {
  to: string;
  children: ReactNode;
  underline?: boolean;
};

const NavbarLink: FC<NavbarLinkProps> = ({
  to,
  children,
  underline = true
}) => (
  <Link
    to={to}
    textTransform="uppercase"
    fontSize="large"
    boxShadow="none"
    transition="box-shadow 200ms ease-in"
    _hover={{
      textDecoration: 'none',
      boxShadow: underline ? 'var(--chakra-shadows-textUnderline)' : 'none'
    }}
    _focus={{
      textDecoration: 'none',
      boxShadow: underline ? 'var(--chakra-shadows-textUnderline)' : 'none'
    }}
  >
    {children}
  </Link>
);

export default NavbarLink;
