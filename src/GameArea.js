import Popup from 'react-popup';
import './App.css';
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import raw from './valid-wordle-words.txt';

const inputStyles = {
    minLength: "1" ,
    maxLength: "1", 
    style: {fontSize: 30, fontWeight:700, fontStyle: 'initial', textTransform: "uppercase"}
}

const borderStyles = {
  m: 1, width :'13%', bgcolor: 'white', border: '3px solid', borderRadius: 2, borderColor:'lightblue' , input: {textAlign: "center"}
}

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
var wordsList = new Array()

function GameArea({props}) {
 
    const [answer, setAnswer] = useState("APPLE");
    const [row, setCurrRow] = useState(0);

    useEffect(() => {
        console.log("Curr Row:"+row)
        input(row)
      });
    

    function input(row){
        let a = document.getElementById(row+"0")
        let b = document.getElementById(row+"1")
        let c = document.getElementById(row+"2");
        let d = document.getElementById(row+"3");
        let e = document.getElementById(row+"4");


        a.onkeyup = function() {
            if (this.value.length === parseInt(this.attributes["maxlength"].value)) {
                b.focus();
            }
        }

        

        b.onkeyup = function() {
            if (this.value.length === parseInt(this.attributes["maxlength"].value)) {
                c.focus();
            }
        }

        b.addEventListener('keyup',function(event){
            if (event.keyCode === 8) {
                a.focus()
            }
        })

        c.onkeyup = function() {
            if (this.value.length === parseInt(this.attributes["maxlength"].value)) {
                d.focus();
            }
        }
        c.addEventListener('keyup',function(event){
            if (event.keyCode === 8) {
                b.focus()
            }
        })

        d.onkeyup = function() {
            if (this.value.length === parseInt(this.attributes["maxlength"].value)) {
                e.focus();
            }
        }

        d.addEventListener('keyup',function(event){
            if (event.keyCode === 8) {
                c.focus()
            }
        })


        e.addEventListener('keyup',function(event){
            if (event.keyCode === 8) {
                d.focus()
            }
        })
    }

    function check(row){
        let row_arr=[]
        let correct_cnt=0
        for (let i=0;i<5;i++){
            row_arr.push(document.getElementById(row.toString()+i.toString()))
        }
        
        for (let i=0;i<5;i++){
            let key = row_arr[i].value.toString()
            key=key.toUpperCase() 
            
            if (answer.includes(key)){
                if (answer.charAt(i)==key){
                    updateColor('green',row,i)
                    correct_cnt++;
                }
                else{
                    updateColor('yellow',row,i)
                }
            }
            else{
                updateColor('grey',row,i)
            }
        }

        
        if (correct_cnt==5){
            console.log("You won!")
            alert('You won!');
            return 
        }
        if (row == 6){
            console.log('You lose')
            Popup.alert('You lose!');
            return
        }
        if (row==6) console.log('Game Over!')
        
    
    }


    function updateColor(color, row, position){
        let textID = row.toString()+position.toString()
        let inputToChange = document.getElementById(textID)
        inputToChange.style.color='black'
        if (color=='yellow'){
            inputToChange.style.backgroundColor='yellow'
        }else if(color=='green'){
            inputToChange.style.backgroundColor='green'
        }else{
            inputToChange.style.backgroundColor='grey'
        }
    }
    
    
    function submitWordle() {
        check(row)
        setCurrRow(row+1)
        let nextFocus = document.getElementById((row+1).toString()+'0')
        nextFocus.focus()
        
    } 

    return (
        <div className='gameArea'>
        <div className='row' id='0'>
         
          <TextField  className="inputCell" id="00" variant="outlined" sx={borderStyles}  inputProps={inputStyles} size='small'/>
          <TextField  className="inputCell" id="01" variant="outlined" sx={borderStyles}  inputProps={inputStyles} size='small'/>
          <TextField  className="inputCell" id="02" variant="outlined" sx={borderStyles}  inputProps={inputStyles} size='small'/>
          <TextField  className="inputCell" id="03" variant="outlined" sx={borderStyles}  inputProps={inputStyles} size='small'/>
          <TextField  className="inputCell" id="04" variant="outlined" sx={borderStyles}  inputProps={inputStyles} size='small'/>
        </div>

        <div className='row' id='1'>
          <TextField  className="inputCell" id="10" variant="outlined" sx={borderStyles}  inputProps={inputStyles} size='small'/>
          <TextField  className="inputCell" id="11" variant="outlined" sx={borderStyles}  inputProps={inputStyles} size='small'/>
          <TextField  className="inputCell" id="12" variant="outlined" sx={borderStyles}  inputProps={inputStyles} size='small'/>
          <TextField  className="inputCell" id="13" variant="outlined" sx={borderStyles}  inputProps={inputStyles} size='small'/>
          <TextField  className="inputCell" id="14" variant="outlined" sx={borderStyles}  inputProps={inputStyles} size='small'/>
        </div>

        <div className='row' id='2'>
          <TextField  className="inputCell" id="20" variant="outlined" sx={borderStyles}  inputProps={inputStyles} size='small'/>
          <TextField  className="inputCell" id="21" variant="outlined" sx={borderStyles}  inputProps={inputStyles} size='small'/>
          <TextField  className="inputCell" id="22" variant="outlined" sx={borderStyles}  inputProps={inputStyles} size='small'/>
          <TextField  className="inputCell" id="23" variant="outlined" sx={borderStyles}  inputProps={inputStyles} size='small'/>
          <TextField  className="inputCell" id="24" variant="outlined" sx={borderStyles}  inputProps={inputStyles} size='small'/>
        </div>

        <div className='row' id='3'>
          <TextField  className="inputCell" id="30" variant="outlined" sx={borderStyles}  inputProps={inputStyles} size='small'/>
          <TextField  className="inputCell" id="31" variant="outlined" sx={borderStyles}  inputProps={inputStyles} size='small'/>
          <TextField  className="inputCell" id="32" variant="outlined" sx={borderStyles}  inputProps={inputStyles} size='small'/>
          <TextField  className="inputCell" id="33" variant="outlined" sx={borderStyles}  inputProps={inputStyles} size='small'/>
          <TextField  className="inputCell" id="34" variant="outlined" sx={borderStyles}  inputProps={inputStyles} size='small'/>
        </div>

        <div className='row' id='4'>
          <TextField  className="inputCell" id="40" variant="outlined" sx={borderStyles}  inputProps={inputStyles} size='small'/>
          <TextField  className="inputCell" id="41" variant="outlined" sx={borderStyles}  inputProps={inputStyles} size='small'/>
          <TextField  className="inputCell" id="42" variant="outlined" sx={borderStyles}  inputProps={inputStyles} size='small'/>
          <TextField  className="inputCell" id="43" variant="outlined" sx={borderStyles}  inputProps={inputStyles} size='small'/>
          <TextField  className="inputCell" id="44" variant="outlined" sx={borderStyles}  inputProps={inputStyles} size='small'/>
        </div>

        <div className='row' id='5'>
          <TextField  className="inputCell" id="50" variant="outlined" sx={borderStyles}  inputProps={inputStyles} size='small'/>
          <TextField  className="inputCell" id="51" variant="outlined" sx={borderStyles}  inputProps={inputStyles} size='small'/>
          <TextField  className="inputCell" id="52" variant="outlined" sx={borderStyles}  inputProps={inputStyles} size='small'/>
          <TextField  className="inputCell" id="53" variant="outlined" sx={borderStyles}  inputProps={inputStyles} size='small'/>
          <TextField  className="inputCell" id="54" variant="outlined" sx={borderStyles}  inputProps={inputStyles} size='small'/>
        </div>
        <div className='buttonArea'>
          <Button id = 'submit' variant="contained" style = {buttonStyles} onClick={submitWordle}>submit</Button>
        </div>
      </div>
    );
}

export default GameArea;