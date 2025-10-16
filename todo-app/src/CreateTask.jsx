import {  useState } from "react"

 const CreateTask=({onCancel, onCreate})=>{
    const[taskName, settaskName]=useState("");
    const[description , setDescription]=useState("");
    const [error , setError]=useState('')

    const handleSubmit=(event)=>{
        event.preventDefault();
        if(!taskName.trim()|| !description.trim()){
            setError("Please fill both fields!");
            return;
        }
        onCreate({taskName, description}); 
        settaskName("");
        setDescription("");
        setError("");

    }
   
    
    return(
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black/35 backdrop-blur-sm">

        
        <div className= "bg-blue-900 max-w-2xl w-full sm:w-[500px] p-6 m-6 rounded-2xl relative">

            {
                error && <div className="flex justify-evenly text-red-500 bg-gray-200 p-1 rounded-lg mb-3">
                    <p className="font-bold font-mono">{error}</p>
                    <button onClick={()=>setError("")}><img className="max-w-6" src="—Pngtree—cross icon wrong sign vector_20826131.png" alt="wrong" /></button>
                    </div>
            }

            <form onSubmit={handleSubmit} className="flex flex-col text-white ">
                <h1 className="font-medium text-2xl text-white flex items-center">Create New Task</h1>
                <p className="text-gray-400 mb-3.5">Remember your task so that you don't forget any of them. </p>

                <label htmlFor="taskName" className="font-medium mb-2">Task Name</label>
                <input  value={taskName} onChange={(event)=>settaskName(event.target.value)} className="border p-2 outline-none mb-2 rounded-lg  " type="text" placeholder="Enter task name"/>

                <label htmlFor="description" className="font-medium mb-2">Description</label>
                <input value={description} onChange={(event)=>setDescription(event.target.value)} className="border p-2  outline-none mb-4 rounded-lg" type="text" placeholder="Description..." />
                <div className="flex  justify-between  ">
                    <button className=" p-1.5 px-10 bg-blue-700 hover:bg-blue-800 hover:border active:bg-blue-800 rounded-lg " type="submit" >Create</button>
                    <button className=" px-10 p-1.5 bg-blue-700 hover:bg-blue-800 hover:border active:bg-blue-800  rounded-lg" onClick={onCancel}>Cancel</button>
                </div> 
            </form>     
        </div>
        </div>
        
        
        
    )
   
    
 }
export default CreateTask
