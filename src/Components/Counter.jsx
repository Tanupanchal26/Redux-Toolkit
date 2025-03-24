import React from 'react'
 import{useDispatch,useSelector} from 'react-redux'
  
  
 import{increment,decrement,reset}from '../feature/countSlice'

  
 const Counter =()=>{

   
   
  const counter =useSelector((state)=>state.count)
  
 const dispatch=useDispatch()
 console.log("hello world")
  
 const handleIncrement=()=>{
 dispatch(increment())
 }
  
 
 const handleDecrement=()=>{
  dispatch(decrement())
  }
   
  const handleReset=()=>{
    dispatch(reset())
    }

    return(
      <>
      <h1>{counter}</h1>
      <button onClick={handleIncrement}>+</button>

      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>Reset</button>
      </>
    )
}
 
export default Counter