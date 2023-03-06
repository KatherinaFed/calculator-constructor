import { Button, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import NumberButton from './NumberButton';

const CalcNumbers = () => {
  const numbers: string[] = [
    '7',
    '8',
    '9',
    '4',
    '5',
    '6',
    '1',
    '2',
    '3',
    '0',
    ',',
  ];

  return (
    <Grid
      templateRows="repeat(4, 1fr)"
      templateColumns="repeat(3, 1fr)"
      gap={1}
    >
      {numbers.map((n) => (
        // <div key={key}>
          <NumberButton number={n} />
        // </div>
      ))}
    </Grid>
  );
};

export default CalcNumbers;
