import { Box, Heading, Text } from '@chakra-ui/react';

import Lines from 'assets/icons/lines.svg';

const HomePage = () => {
  return (
    <Box position="relative">
      <Box
        position="absolute"
        top="-5.5rem"
        // the negative rems is to offset the art from the page margin
        left={{
          base: 'calc(0px - 2rem)',
          md: 'calc(0px - 6rem)',
          lg: 'calc(0px - 10rem)'
        }}
      >
        <Lines />
      </Box>
      <Box zIndex={10} position="relative">
        <Heading
          as="h1"
          size={{ base: '2xl', sm: '3xl', md: '4xl' }}
          marginBottom={4}
        >
          {"Hi, I'm Addison Dalton"}
        </Heading>
        <Heading as="h2" size={{ base: 'md', sm: 'lg', md: 'xl' }}>
          <Text as="span" shadow="textUnderline">
            Software Engineer
          </Text>
          {', '}
          <Text as="span" shadow="textUnderline">
            Baker
          </Text>
          {', and '}
          <Text as="span" shadow="textUnderline">
            Ant Keeper
          </Text>
        </Heading>
      </Box>
    </Box>
  );
};

export default HomePage;
