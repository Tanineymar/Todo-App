import { useState } from "react"
import CreateTask from "./createTask"


function TodoApp(){
    const[showForm , setShowForm]=useState(false)    

    return(
        <div className="bg-blue-950 h-screen p-6   ">
            <div>
                <h1 className= " flex justify-evenly text-white text-4xl font-medium mb-5">My Todos </h1>
                <h1 className="text-2xl text-white mb-4">Assigned</h1>
                <button onClick={()=>setShowForm(true)}
                className="bg-blue-700 hover:bg-blue-800 hover:border active:bg-blue-800 rounded-lg text-white font-medium p-2.5 mb-4">
                    Create Task</button>
            </div>
            {showForm && <CreateTask onCancel={()=>setShowForm(false)}/> }
        </div>
    )
}
export default TodoApp
