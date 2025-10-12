import { useState } from "react"

function Login({onLogin}) {
    const[email , setEmail]=useState("");
    const[password, setPassword]=useState("");

    const handleLogin=(event)=>{
        event.preventDefault();
        if(email && password){
            onLogin();
        }else{
            alert("Please enter Email and Password to Continue")
        }

    }
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-blue-950">
            <form  className="flex flex-col bg-blue-900 text-amber-50 p-8 rounded-2xl" onSubmit={handleLogin}>
                <h2 className="text-4xl mb-2.5">Login</h2>
                <p className="">Login to continue</p>
                <input  className="border rounded-lg p-2 my-3 w-full "
                 type="email" onChange={(event)=>setEmail(event.target.value)} name="email" placeholder="Enter Email" />
                <input  className="border p-2 mb-2 w-full rounded-lg"
                type="password" onChange={(event)=>setPassword(event.target.value)} name="password" placeholder="Enter Password" />
                <button className="bg-blue-700 hover:bg-blue-800 active:bg-blue-800 rounded-lg text-white py-2">Login</button>
            </form>

        </div>
    )
}
export default Login