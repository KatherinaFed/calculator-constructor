import { Button } from '@chakra-ui/react'
import React from 'react'
import { setValue } from '../../../store/calculatorSlice/calculatorSlice'
import { useAppDispatch } from '../../../store/store'

interface NumberProps {
  number: string
}

const NumberButton: React.FC<NumberProps> = ({ number }) => {
  const dispatch = useAppDispatch();
  
  const handleClick = () => {
    console.log(number)
    dispatch(setValue(number));
  }

  return (
    <Button onClick={handleClick}>{number}</Button>
  )
}

export default NumberButton;