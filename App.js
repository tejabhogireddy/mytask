import './App.css';
import { useState } from 'react';



function App() {
const [task,SetTask]=useState({ });
const changeHandler = e =>{
  SetTask(e.target.value)
  
}
const submitHandler = e =>{
  e.preventDefault();
  console.log(task);
}
  


  return (
    <div>
     
    <div className='container1'>
     <div className='header1'>
      <form  onSubmit={submitHandler}>
      <input type='text' className='text1' onChange={changeHandler} placeholder='Title'  /> 
      <input type='date' className='text2' /> <br/>
      <input type='text' className='text3'   placeholder='Description' /> 
      <button className='btn1'  >Save</button> 
      </form>
     </div>
     <div className='header2'>
      <div >
     <button className='btn2'>Sun</button>
     <button className='btn2' >Mon</button>
     <button className='btn2'>Tue</button>
     <button className='btn2'>wed</button>
     <button className='btn2'>Thu</button>
     <button className='btn2'>Fri</button>
     <button className='btn2'>Sat</button>
     </div>
     </div>


     

    </div>
    
    </div>
  );
}

export default App;
