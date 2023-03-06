import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const Display = () => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      textAlign={'right'}
    >
      <Text fontSize="2xl" p={1}>
        Values
      </Text>
    </Box>
  );
};

export default Display;
