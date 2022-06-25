import './App.css';
import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import GameArea from './GameArea';



const buttonStyles = {
    borderRadius: 20,
    width:"14%",
    backgroundColor: blue,
    padding: "18px 36px",
    fontSize: "15px",
}

const authorStyles = {
  fontStyle:'italic',
  color: blue,
  textAlign:'center',
  margin: "30px"
}
var res



function App() {
  return (
    <div>
      <div className='title'>Wordle</div>
      <Typography fontStyle={authorStyles}>
        by Victoria Niu UCI
      </Typography>
      <GameArea/>  
      
    </div>
  );
}

export default App;
