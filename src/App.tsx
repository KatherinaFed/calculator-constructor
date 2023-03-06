import { Center, Container, Grid } from '@chakra-ui/react';
import React from 'react';
import Calculator from './components/Calculator/Calculator';

function App() {
  return (
    <Container maxW="2xl" centerContent>
      <Grid
        h="200px"
        w="600px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
      >
        <Calculator />
      </Grid>
    </Container>
  );
}

export default App;
