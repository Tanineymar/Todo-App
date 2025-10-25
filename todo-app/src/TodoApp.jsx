import { useEffect, useState } from "react"
import CreateTask from "./createTask"
import Login from "./Login"


function TodoApp() {
    const [showForm, setShowForm] = useState(false)
    const [editingTask , setEditingTask]=useState(null)
    const [isLoggedIn , setIsLoggedIn]=useState(false)
 

    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });
    

    useEffect(()=>{
        const loginStatus =localStorage.getItem('loggedIn');
        if(loginStatus === 'true'){
            setIsLoggedIn(true);
        }
    },[])

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks])


    const handleLogin=()=>{
        setIsLoggedIn(true)
    }
 const handleLogout=()=>{
    localStorage.removeItem("loggedIn");
    setIsLoggedIn(false);
 };


const handleCreateTask = (task) => {
    setTasks(prev => {
        const updatedTasks = [...prev, task];
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        return updatedTasks;
    });
    setShowForm(false);
};


    const handleUpdateTask=(updatedTask)=>{
        const updatedTasks =tasks.map((task)=>
            task.id === updatedTask.id ? updatedTask:task
    );
        setTasks(updatedTasks);
        setEditingTask(null);
        setShowForm(false);
    };

    if(!isLoggedIn){
        return <Login onLogin={handleLogin}/>
    }

    return (

        <div className="bg-blue-950 min-h-screen p-6 ">

            <div>
                <h1 className=" flex justify-evenly text-white  text-3xl font-medium mb-5">My Todos </h1>
                <h1 className="text-2xl text-white mb-4">Assigned</h1>
                <button onClick={() => setShowForm(true)}
                    className="bg-blue-700 hover:bg-blue-800 hover:border-amber-200 active:bg-blue-800 rounded-lg text-white font-medium p-2.5 mb-4 border-2 border-blue-700">
                    Create Task</button>
            </div>
            <div className="flex flex-col ">
                {
                    tasks.map((task) => (
                        <div key={task.id} className="border-2 mb-5 max-w-2xl rounded-2xl p-3 border-amber-200 ">
                            <h2 className="font-semibold text-white text-lg mb-3">{task.taskName}</h2>
                            <p className="text-gray-200 mb-3">{task.description}</p>
                           
                    
                          <div className="flex justify-between">
                            <p className="text-gray-300 text-sm">{task.date} | {task.time}</p>
                            
                            <div className="flex gap-2">
                              <button onClick={() => {
                                const updatedTasks = tasks.filter((t) => t.id !== task.id);
                                setTasks(updatedTasks);
                            }}

                                className="p-1 rounded-md  bg-red-500 hover:bg-red-600 active:bg-red-600 active:scale-95 transition-all  ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash ">
                                    <path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                </svg>
                            </button>
                            <button onClick={()=>{
                                setEditingTask(task)
                                setShowForm(true)
                            }}
                                    
                                     
                            className="p-1 rounded-md bg-blue-700 hover:bg-blue-800 active:scale-95 transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                    stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 20h9" />
                                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                </svg>
                            </button>
                            </div>
                          </div>
                        </div>
                    ))
                }                
            </div>
            {showForm && <CreateTask onCancel={() =>{
                setShowForm(false)
                setEditingTask(null);
            }}
                onCreate={handleCreateTask} 
                onUpdate={handleUpdateTask}
                editingTask={editingTask}/>}

        </div>
    
    )
}
export default TodoApp



