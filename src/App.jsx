import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
function App() {
  //state to hold value from input field
  const [principle,setPrinciple]=useState(0)
  const [rate,setRate]=useState(0)
  const [year,setYear]=useState(0)
  const [interest,setInterest]=useState(0)

  //for conditional rendering
  const[isPrinciple,setIsPrinciple]=useState(true)
  const[isRate,setIsRate]=useState(true)
  const[isYear,setIsYear]=useState(true)
 const validate=(e)=>{
  let value=e.target.value;
  let name=e.target.name;

if(!!value.match(/^[0-9]*$/)){
  if(name=='principle'){
    setPrinciple(value)
    setIsPrinciple(true)
  }else if(name=='rate'){
    setRate(value)
    setIsRate(true)
  }
  else{
    setYear(value)
    setIsYear(true)
  }
}
  else{
    if(name=='principle'){
      setPrinciple(value)
      setIsPrinciple(false)
    }else if(name=='rate'){
      setRate(value)
      setIsRate(false)
    }
    else{
      setYear(value)
      setIsYear(false)
    }
  }
 }

 const handleReset=()=>
  {
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setInterest(0)
    setIsPrinciple(true)
    setIsRate(true)
    setIsYear(true)
  }
  const calculate =()=>{
  setInterest((principle*rate*year)/100)
  }
console.log('priciple',principle);
console.log('rate',rate);
console.log('year',year);


  return (
    <>
     <div className='container d-flex justify-content-center align-items-center mt-5' style={{width:'100%',height:'100vh'}}>
      <div className='bg-light p-5 rounded 'style={{width:'500px'}}>
      <h2>Simple Interest App</h2>
      <p>Calculate your simple Interest Easily</p>

      <div className='mt-5 flex-column rounded shadow bg-warning d-flex justify-content-center align-items-center p-4 '>
        <h2>{interest}</h2>
        <p>Total Simple Interest</p>
        </div>
        <form className ='shadow bg-light p-4 mt-4'>
      <div className='mb-3 w-100'>
      <TextField id="outlined-basic"  label="Principle amount" value={principle||''} onChange={(e)=>validate(e)} name='principle' variant="outlined"  className='w-100'/>
      </div>
      {!isPrinciple && <p className='text-danger'>*Invalid Input</p>}
      <div className='mb-3 w-100'>
      <TextField id="outlined-basic" label="Rate of Interest(p.a)%"  value={rate ||''} onChange={(e)=>validate(e)} name='rate' variant="outlined"  className='w-100'/>
      </div>
      {!isRate && <p className='text-danger'>*Invalid Input</p>}
      <div className='mb-3 w-100'>
      <TextField id="outlined-basic"  label="Year" onChange={(e)=>validate(e)} name='year'value={year||''}  variant="outlined"  className='w-100'/>
      </div>
      {!isYear && <p className='text-danger'>*Invalid Input</p>}
      <div className='d-flex justify-content-between w-100 mt-4'>
      <Button variant="contained" color='success'style={{width:'190px',height:'60px'}} disabled={isPrinciple && isRate && isYear?false:true} onClick={calculate}>Calculate</Button>
      <Button variant="outlined" style={{width:'190px',height:'60px'}} className='ms-3' onClick={handleReset}>Reset</Button>
      </div>
        </form>

      </div>
      </div> 
    </>
  )
}

export default App
