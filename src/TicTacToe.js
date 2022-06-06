import logo from './logo.svg';
import './App.css';
import './Block.js';
import { Box, Button } from '@mui/material'
import { useState } from 'react'


function TicTacToe() {
  let [blocks, setBlocks] = useState(Array(9).fill(null));
  let [turn, setTurn] = useState(0);
  let [winner, setWinner] = useState('');
  let [end, setEnd] = useState(false);
  let content = ['O', 'X'];
  

  let winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  
  let handleClick = (i) => {
    if(!checkWinner() && !blocks[i] && !end){
        let tmpBlocks = blocks.slice();
        tmpBlocks[i] = content[turn];
        setTurn((turn+1)%2);
        setBlocks(tmpBlocks);
        checkWinner();
    }
  }

  let reset = () => {
    setBlocks(Array(9).fill(null));
    setTurn(0);
    setWinner('');
  }

  let checkWinner = () => {
    for(let j = 0; j < winPattern.length; j++){
      if(blocks[winPattern[j][0]] && blocks[winPattern[j][0]] == blocks[winPattern[j][1]] && blocks[winPattern[j][1]] == blocks[winPattern[j][2]]){
        setWinner(blocks[winPattern[j][0]]);
        return true;
      }
    }
    return false;
  }

  function Block(props) {
      let [state, setState] = useState(true);
      return (
        <Box name={0} sx={{p: 1, border: "1px solid black", fontSize:"30px", width: "50px", height: "50px", backgroundColor: "cyan", textAlign: "center"}} onClick={()=>{handleClick(props.id)}}>
            {blocks[props.id]}
        </Box>
      );
  }

  return (
    <Box sx={{mt: 30, ml: 100}}>
      <h1>It's {content[turn]} turn! </h1>
      <h1>Winner is: {winner}</h1>
      <Box sx={{display: "flex"}}>
          <Block id={0}/>
          <Block id={1}/>
          <Block id={2}/>
      </Box>
      <Box sx={{display: "flex"}}>
          <Block id={3}/>
          <Block id={4}/>
          <Block id={5}/>
      </Box>
      <Box sx={{display: "flex"}}>
          <Block id={6}/>
          <Block id={7}/>
          <Block id={8}/>
      </Box>
      <br/>
      <Button variant="contained" onClick={reset}>Reset</Button>
    </Box> 
  );
}

export default TicTacToe;
