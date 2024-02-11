"use client"
import React, { useState } from 'react'

const Page = () => {
  const [task, settask] = useState("");
  const [des, setdes] = useState("");
  const [maintask, setmaintask] = useState([])
  const reloaderpage=(e)=>{
    //this will prevent ur website from reloading
    e.preventDefault();
    setmaintask([...maintask,{task,des}]);
    settask("");
    setdes("");
    // console.log(maintask);
  }
  const deletetask=(i)=>{
    let copytask=[...maintask];
    copytask.splice(i,1);
    setmaintask(copytask);
  }
  const edittask = (i) => {
    let newArray = [...maintask];
    let et=prompt("Enter Your Task",newArray[i].task);
    let de=prompt("Enter Your Description",newArray[i].des);
      newArray[i].task=et;
      newArray[i].des=de;
      setmaintask(newArray);
  };
  let rendertask=<h2 className='text-white text-center'>No Task Available</h2>
  if(maintask.length>0){
    rendertask=maintask.map((e,i)=>{
      return(
        <li key={i} className='text-white flex items-center justify-around'>
         <div className='flex justify-around items-center w-2/3 mb-4'>
        <h4 className='text-white'>{e.task}</h4>
        <h5>{e.des}</h5>
        </div>
        <button onClick={()=>{edittask(i)}} className='bg-white text-black hover:bg-black hover:border-white hover:border-2 hover:text-white px-4 py-1'>Edit</button>
        <button onClick={()=>{deletetask(i)}} className='bg-white text-black hover:bg-black over:border-white hover:border-2 hover:text-white px-4 py-1'>Delete</button>
        </li>
      )
  })
  }
  return (
    <>
    <h1 className='bg-black p-5 text-center text-white text-3xl'>Prime Todo List</h1>
    <form onSubmit={reloaderpage} className='flex justify-center items-center'>
      <input type="text" className='px-3 py-2 m-5 border-2 border-zinc-600 
      ' 
      placeholder='Enter Your Task' 
      //we set the valuee to usestate it is known as 2way binding
      value={task}
      onChange={(e)=>{settask(e.target.value)}}
      />
      <input type="text" 
      className='px-3 py-2 m-5 border-2 border-zinc-600' 
      placeholder='Enter Description'
      value={des} 
      onChange={(e)=>{setdes(e.target.value)}}
      />
      <button className='bg-black text-white p-3 rounded m-5'>Add Task</button>
    </form>
    <div className='p-8 bg-black mt-10 text-xl'>
      {rendertask}
    </div>
    </>
  )
}

export default Page