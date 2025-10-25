import { useEffect, useState } from "react"

const CreateTask = ({ onCancel, onCreate, onUpdate ,editingTask }) => {
    const [taskName, setTaskName] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState('')
 

useEffect(()=>{
    if(editingTask){
        setTaskName(editingTask.taskName);
        setDescription(editingTask.description)
    }
},[editingTask])

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!taskName.trim() || !description.trim()) {
            setError("Please fill both fields!");
            return;
        }
        const newTask = {
            id:  editingTask ? editingTask.id :Date.now(),
            taskName,
            description,
        };
        if (editingTask){
            onUpdate(newTask);
        }else{
            onCreate(newTask)
        }
        setTaskName("");
        setDescription("");
        setError("");

    }


    return (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black/35 backdrop-blur-sm">


            <div className="bg-blue-900 max-w-2xl w-full sm:w-[500px] p-6 m-6 rounded-2xl relative">

                {
                    error && <div className="flex justify-between text-red-600 bg-gray-200 p-1 rounded-lg mb-3">
                        <p className=" font-bold font-mono">{error}</p>
                        <button onClick={() => setError("")}><svg className="bg-red-200 border border-red-200 hover:border-red-600 rounded-md " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></button>
                    </div>
                }

                <form onSubmit={handleSubmit} className="flex flex-col text-white ">
                    <h1 className="font-medium text-2xl flex items-center">
                        {
                            editingTask? "Edit Task" : "Create New Task"
                        }</h1>
                    <p className="text-gray-400 mb-3.5">Remember your task so that you don't forget any of them. </p>

                    <label htmlFor="taskName" className="font-medium mb-2 ">Task Name</label>
                    <input value={taskName} onChange={(event) => setTaskName(event.target.value)} className="border p-2 outline-none mb-2 rounded-lg " type="text" placeholder="Enter task name" />

                    <label htmlFor="description" className="font-medium mb-2">Description</label>
                    <input value={description} onChange={(event) => setDescription(event.target.value)} className="border p-2  outline-none mb-4 rounded-lg " type="text" placeholder="Description..." />
                    <div className="flex  justify-between  ">
                        <button className=" p-1.5 px-10 bg-blue-700 hover:bg-blue-800 hover:border-white  active:bg-blue-800 rounded-lg border border-blue-700" type="submit">{editingTask? "Update": "Create"}</button>
                        <button className=" px-10 p-1.5 bg-blue-700 hover:bg-blue-800  hover:border-white active:bg-blue-800  rounded-lg border border-blue-700"  type="button " onClick={onCancel}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>



    )


}
export default CreateTask
