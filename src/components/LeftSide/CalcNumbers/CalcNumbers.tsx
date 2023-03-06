import { Button, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'

const CalcNumbers = () => {
  return (
    <Grid templateRows="repeat(4, 1fr)" templateColumns="repeat(3, 1fr)" gap={1}>
      <Button>7</Button>
      <Button>8</Button>
      <Button>9</Button>
      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button>0</Button>
      <Button>,</Button>
        {/* <GridItem><Button>7</Button></GridItem>
        <GridItem>8</GridItem>
        <GridItem>9</GridItem>
        <GridItem>4</GridItem>
        <GridItem>5</GridItem>
        <GridItem>6</GridItem>
        <GridItem>1</GridItem>
        <GridItem>2</GridItem>
        <GridItem>3</GridItem>
        <GridItem>0</GridItem>
        <GridItem>,</GridItem> */}
    </Grid>
  )
}

export default CalcNumbers