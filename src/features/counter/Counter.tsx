import React from 'react'
import { Button, TextField } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import {
  increment,
  decrement,
  reset,
  incrementByAmount
} from './counterSlice';
import { useState } from 'react';
import styled from '@emotion/styled';


const Container = styled('div')({
  margin: '20px',
})

const Counter = () => {
  const count = useSelector((state: {counter: any}) => state.counter.count)
  const dispatch = useDispatch()

  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  }

  return (
    <section>
      <a>{count}</a>
      <Container>
        <Container>
          <Button variant="contained" onClick={() => dispatch(increment())}>+</Button>
          <Button variant="contained" onClick={() => dispatch(decrement())}>-</Button>
        </Container>
        <TextField
          id="outlined-number"
          label="Number"
          type="text"
          variant="outlined"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(parseInt(e.target.value))}
        />
        <Container>
          <Button variant="contained" onClick={() => dispatch(incrementByAmount(addValue))}>Add amount</Button>
          <Button variant="contained" onClick={resetAll}>Reset</Button>
        </Container>
      </Container>
    </section>
  )
}

export default Counter