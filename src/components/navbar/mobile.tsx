import { useRef } from 'react';
import {
  Button,
  Drawer,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
  useDisclosure,
  DrawerOverlay
} from '@chakra-ui/react';

import LinkList from './link-list';
import MenuIcon from 'assets/icons/menu.svg';

const MobileNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const ref = useRef<HTMLButtonElement>(null);
  return (
    <>
      <Button
        ref={ref}
        onClick={onOpen}
        bgColor="transparent"
        display={{ md: 'block', lg: 'none' }}
      >
        <MenuIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={ref}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor="background.primary">
          <DrawerCloseButton />
          <DrawerBody marginTop={8}>
            <LinkList
              display="flex"
              flexDirection="column"
              gap={8}
              includeHome
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileNavbar;
