import { useEffect, useState } from "react"
import CreateTask from "./createTask"


function TodoApp() {
    const [showForm, setShowForm] = useState(false)


    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks])

    const handleCreateTask = (newTask) => {
        setTasks([...tasks, newTask])
        setShowForm(false)
    }

    return (
        <div className="bg-blue-950 min-h-screen p-6 ">

            <div>
                <h1 className=" flex justify-evenly text-white text-3xl font-medium mb-5">My Todos </h1>
                <h1 className="text-2xl text-white mb-4">Assigned</h1>
                <button onClick={() => setShowForm(true)}
                    className="bg-blue-700 hover:bg-blue-800 hover:border active:bg-blue-800 rounded-lg text-white font-medium p-2.5 mb-4">
                    Create Task</button>
            </div>
            <div>
                {
                    tasks.map((task) => (
                        <div key={task.id} className="border-2 mb-5 max-w-2xl rounded-2xl p-3 border-blue-600 ">
                            <h2 className="font-semibold text-white text-lg mb-3">{task.taskName}</h2>
                            <p className="text-gray-300 mb-3">{task.description}</p>
                            <button onClick={() => {
                                const updatedTasks = tasks.filter((_, i) => i !== index);
                                setTasks(updatedTasks);
                            }}
                                className="hover:bg-red-600 p-1 rounded-md ease-in {} active:bg-red-600 p-1 rounded-md ease-in ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash ">
                                    <path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                </svg>
                            </button>
                        </div>
                    ))
                }
            </div>
            {showForm && <CreateTask onCancel={() => setShowForm(false)}
                onCreate={handleCreateTask} />}

        </div>
    )
}
export default TodoApp
