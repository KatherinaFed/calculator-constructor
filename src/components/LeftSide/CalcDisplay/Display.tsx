import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

const Display: React.FC = () => {
  const { value } = useSelector((state: RootState) => state.calc);

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      textAlign={'right'}
    >
      <Text fontSize="2xl" p={1}>
        {value}
      </Text>
    </Box>
  );
};

export default Display;
