import { Box, Button, Flex, SimpleGrid } from '@chakra-ui/react';
import React from 'react';

const CalcSigns = () => {
  return (
    <SimpleGrid columns={4} gap={1}>
      <Button type="button">/</Button>

      <Button type="button">x</Button>

      <Button type="button">-</Button>

      <Button type="button">+</Button>
    </SimpleGrid>
  );
};

export default CalcSigns;
