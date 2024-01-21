import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

import Link from 'components/link';

const HomePage = () => {
  return (
    <Box>
      <Box
        paddingBottom={{ base: '3rem', md: '4rem' }}
      >
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
      <Button
        as={Link}
        to="/projects"
        variant="outline"
        rightIcon={<ArrowForwardIcon />}
      >
        View my work
      </Button>
    </Box>
  );
};

export default HomePage;
