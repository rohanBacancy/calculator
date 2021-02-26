import { Button,Grid, Typography } from '@material-ui/core';
import { useState } from 'react';



function App() {

  const [curInput,setCurInput] = useState("");

  const evalClickHandler = () =>
  {
    try {
    let ans = eval(curInput);
    setCurInput(ans);  
    } catch (error) {
      alert("Please Enter a valid expression")
      setCurInput("")
    }    
  }

  const clrClickHandler = () =>
  {
    setCurInput("");
  }

  const btnClickHandler = (val) =>
  {
    switch(val)
    {
      case val:
        setCurInput(curInput + val);
        break;
      default:
        alert("Will never be reached , hopefully!");
    }
  }

  const sqlClickHandler = () =>
  {
    try {
      let ans = Math.pow(eval(curInput),2);

      if(isNaN(ans)) throw(Error("Enter Valid Input"));
      else setCurInput(ans);

    } catch (error) {
      alert("Please Enter a Valid Expression")
      setCurInput("")
    }
  }

  const cubeClickHandler = () =>
  {
    try {
      let ans = Math.pow(eval(curInput),3);

      if(isNaN(ans)) throw(Error("Enter Valid Input"));
      else setCurInput(ans);

    } catch (error) {
      alert("Please Enter a Valid Expression")
      setCurInput("")
    }
  }

  const backClickHandler =() =>
  {
    try{
    let tmp = curInput;
    let newstr = tmp.substr(0,(tmp.length-1))
    setCurInput(newstr);
    }
    catch(error){
      alert("Input is not valid to be removed");
    }
  }

  return (
    <div>
      <h2 style={{display:'flex',justifyContent:'center'}}>Calculator Task</h2>
      
      <Typography variant="h4" justify="center" align="center" style={{marginBottom:'16px'}}>{curInput}</Typography>

      <Grid container spacing={2} alignItems={'center'} justify={'center'}>
        <Grid container spacing={1} justify={'center'} style={{marginBottom:'8px'}}>
          <Grid item><Button variant={'contained'} color={'primary'} onClick={() => btnClickHandler("1")}>1</Button></Grid>
          <Grid item><Button variant={'contained'} color={'primary'} onClick={() => btnClickHandler("2")}>2</Button></Grid>
          <Grid item><Button variant={'contained'} color={'primary'} onClick={() => btnClickHandler("3")}>3</Button></Grid>
          <Grid item><Button variant={'contained'} color={'secondary'} onClick={() => btnClickHandler("+")}>+</Button></Grid>
        </Grid>
        <Grid container spacing={1} justify={'center'} style={{marginBottom:'8px'}}>
          <Grid item><Button variant={'contained'} color={'primary'} onClick={() => btnClickHandler("4")}>4</Button></Grid>
          <Grid item><Button variant={'contained'} color={'primary'} onClick={() => btnClickHandler("5")}>5</Button></Grid>
          <Grid item><Button variant={'contained'} color={'primary'} onClick={() => btnClickHandler("6")}>6</Button></Grid>
          <Grid item><Button variant={'contained'} color={'secondary'} onClick={() => btnClickHandler("-")}>-</Button></Grid>
        </Grid>
        <Grid container spacing={1} justify={'center'} style={{marginBottom:'8px'}}>
          <Grid item><Button variant={'contained'} color={'primary'} onClick={() => btnClickHandler("7")}>7</Button></Grid>
          <Grid item><Button variant={'contained'} color={'primary'} onClick={() => btnClickHandler("8")}>8</Button></Grid>
          <Grid item><Button variant={'contained'} color={'primary'} onClick={() => btnClickHandler("9")}>9</Button></Grid>
          <Grid item><Button variant={'contained'} color={'secondary'} onClick={() => btnClickHandler("*")}>*</Button></Grid>
        </Grid>
        <Grid container spacing={1} justify={'center'} style={{marginBottom:'8px'}}>
          <Grid item><Button variant={'contained'} color={'primary'} onClick={() => btnClickHandler("0")}>0</Button></Grid>
          <Grid item><Button variant={'contained'} color={'primary'} onClick={() => btnClickHandler(".")}>.</Button></Grid>
          <Grid item><Button variant={'contained'} color={'secondary'} onClick={() => evalClickHandler()}>=</Button></Grid>
          <Grid item><Button variant={'contained'} color={'secondary'} onClick={() => btnClickHandler("/")}>/</Button></Grid>
          
        </Grid>
        <Grid container spacing={1} justify={'center'}>
          
          <Grid item><Button variant={'contained'} color={'secondary'} onClick={()=> sqlClickHandler()}>SQR</Button></Grid>
          <Grid item><Button variant={'contained'} color={'secondary'} onClick={()=> cubeClickHandler()}>CUBE</Button></Grid>
          <Grid item><Button variant={'contained'} color={'secondary'} onClick={() => clrClickHandler()}>C</Button></Grid>
          <Grid item><Button variant={'contained'} color={'secondary'} onClick={()=> backClickHandler()}>X</Button></Grid>
        </Grid>
      </Grid>

      
    </div>
  );
}

export default App;
