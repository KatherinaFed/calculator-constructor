import { Box, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import CalcButton from '../CalcButton/CalcButton';
import Display from '../CalcDisplay/Display';
import CalcNumbers from '../CalcNumbers/CalcNumbers';
import CalcSigns from '../CalcSigns/CalcSigns';

const SideBar = () => {
  return (
    <Grid templateRows="repeat(4, auto)" gap={4}>
      <GridItem w='100%'>
        <Display />
      </GridItem>
      <GridItem w='100%'>
        <CalcSigns />
      </GridItem>
      <GridItem w='100%'>
        <CalcNumbers />
      </GridItem>
      <GridItem w='100%'>
        <CalcButton />
      </GridItem>
    </Grid>
  );
};

export default SideBar;
