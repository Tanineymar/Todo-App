import { useState } from "react"

function TodoApp(){
    const[showForm , setShowForm]=useState(false)

 const createTask=()=>{
    return(
        <div className="bg-blue-900 max-w-2xl  p-6 m-auto rounded-2xl mt-8">
            <form className="flex flex-col text-white  ">
                <h1 className="font-medium text-2xl text-white flex items-center">Create New Task</h1>
                <p className="text-gray-400 mb-3.5">Remember your task so that you don't forget any of them. </p>

                <label for="taskName" className="font-medium mb-2">Task Name</label>
                <input  className="border p-2 outline-none mb-2  " type="text" placeholder="Enter task name"/>

                <label For="description" className="font-medium mb-2">Description</label>
                <input  className="border p-2  outline-none mb-4" type="text" placeholder="Description..." />
                <div className="flex  justify-between  ">
                    <button className=" p-1.5 px-10 bg-blue-700 hover:bg-blue-800 hover:border active:bg-blue-800 ">Create</button>
                    <button className=" px-10 p-1.5 bg-blue-700 hover:bg-blue-800 hover:border active:bg-blue-800 " onClick={() => setShowForm(false)}>Cancel</button>
                </div> 
            </form>
        </div>
    )
 }

    return(
        <div className="bg-blue-950 h-screen p-6   ">
            <div>
                <h1 className= " flex justify-evenly text-white text-4xl font-medium mb-5">My Todos </h1>
                <h1 className="text-2xl text-white mb-4">Assigned</h1>
                <button onClick={()=>setShowForm(true)}
                className="bg-blue-700 hover:bg-blue-800 hover:border active:bg-blue-800 rounded-lg text-white font-medium p-2.5 mb-4">
                    Create Task</button>
            </div>
            {showForm && createTask()}
        </div>
    )
}
export default TodoApp
