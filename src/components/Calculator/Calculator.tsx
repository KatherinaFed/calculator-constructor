import { GridItem } from '@chakra-ui/react';
import React from 'react';
import SideBar from '../LeftSide/SideBar/SideBar';
import Canvas from '../RightSide/Canvas/Canvas';

const Calculator = () => {
  return (
    <>
      <GridItem rowSpan={1} colSpan={2} bg="lightblue">
        Constructor
      </GridItem>
      <GridItem colSpan={1} bg="lightred">
        <SideBar />
      </GridItem>
      <GridItem colSpan={1} bg="lightred">
        <Canvas />
      </GridItem>
    </>
  );
};

export default Calculator;
