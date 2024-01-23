"use client"
import React, { useState } from 'react'

const page = () => {
  const [title , settitle] = useState("")
  const [desc , setDesc] = useState("")
  const [mainTask , setmainTask] = useState([])

  const submithandler = (e)=>{
    e.preventDefault()
    //e.preventDefault() is an inbuilt method which stops submitiing forms or stop to reload form

    setmainTask ([...mainTask , {title,desc}])
    console.log(mainTask)
   // maintask is baiscally a container where we add our new and previous tasks
    //in setmainTask we store what we write in task and ....maintask is passed in array to store  our previous
    //task so we can add new task without removing old task
    // console.log(title)
    // console.log(desc)
    settitle("")
    setDesc("")
  }

  const deleteHandler = (i)=>{
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setmainTask(copytask)
  }

  let renderTask = <h2>No Task Available</h2>;
 if(mainTask.length > 0) {
    renderTask = mainTask.map((t,i)=>{
    return(
      <li key={i} className='flex item-center justify-between mb-8'>
      <div className="flex item-center justify-between mb-5 w-2/3">
        <h5 className='text-xl font-semibold'>{t.title}</h5> 
       
        <h6 className='text-2xl font-semibold'>{t.desc}</h6>
      </div>
      <button onClick={()=>{
        deleteHandler(i)
      }}>Delete</button>
      </li>
    );
  });
}
  return (
    <>
    <h1 className='logo'>Rutu's ToDo-List</h1>
    <form onSubmit={submithandler}>
      <div className="inner">
      <input type="text" placeholder='Enter Title Here' value={title}
      onChange={(e)=>{
        settitle(e.target.value)
      }}/>
      <input type="text" placeholder='Enter Description Here' value={desc}
      onChange={(e)=>{
        setDesc(e.target.value)
      }}/>
      <button  className='btn'>Add Task</button>
      </div>
      
    </form>
    <hr />
    <div className="main">
      <ul>
        {renderTask}
      </ul>
    </div>
    </>
  )
}

export default page
