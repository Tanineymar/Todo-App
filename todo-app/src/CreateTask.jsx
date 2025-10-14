import {  useState } from "react"

 const CreateTask=({onCancel})=>{
    const[taskName, settaskName]=useState("");
    const[description , setDescription]=useState("");
    console.log(taskName, description);
    
    return(
        <div className="bg-blue-900 max-w-2xl  p-6 m-auto rounded-2xl mt-8">
            <form className="flex flex-col text-white  ">
                <h1 className="font-medium text-2xl text-white flex items-center">Create New Task</h1>
                <p className="text-gray-400 mb-3.5">Remember your task so that you don't forget any of them. </p>

                <label htmlFor="taskName" className="font-medium mb-2">Task Name</label>
                <input  onChange={(event)=>settaskName(event.target.value)} className="border p-2 outline-none mb-2  " type="text" placeholder="Enter task name"/>

                <label htmlFor="description" className="font-medium mb-2">Description</label>
                <input onChange={(event)=>setDescription(event.target.value)} className="border p-2  outline-none mb-4" type="text" placeholder="Description..." />
                <div className="flex  justify-between  ">
                    <button className=" p-1.5 px-10 bg-blue-700 hover:bg-blue-800 hover:border active:bg-blue-800 ">Create</button>
                    <button className=" px-10 p-1.5 bg-blue-700 hover:bg-blue-800 hover:border active:bg-blue-800 " onClick={onCancel}>Cancel</button>
                </div> 
            </form>     
        </div>
        
        
        
    )
   
    
 }
export default CreateTask
