import { useState } from "react"

function Login({ onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (event) => {
        event.preventDefault();

        const emailPattern=  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if(!email.trim() || !password.trim()){
            alert("Please fill out both email and password.");
        }else if(!emailPattern.test(email)){
            alert("Please enter a valid email address.")
        }else if(password.length<6){
            alert("Password must be atleast 6 character long.")
        }else{
            onLogin()
        }
        

    }
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-blue-950">
            <form className="flex flex-col bg-blue-900 text-white p-8 rounded-2xl " onSubmit={handleLogin}>
                <h2 className="text-4xl mb-2.5">Login</h2>
                <p className="text-gray-300">Login to continue</p>
                <input className="border rounded-lg p-2 my-3 w-full outline-none "
                    type="email" onChange={(event) => setEmail(event.target.value)} name="email" placeholder="Enter Email" />
                <input className="border p-2 mb-3 w-full rounded-lg outline-none"
                    type="password" onChange={(event) => setPassword(event.target.value)} name="password" placeholder="Enter Password" />
                <button className="bg-blue-700 hover:bg-blue-800 hover:border active:bg-blue-800 rounded-lg  text-white py-2">Login</button>
            </form>

        </div>
    )
}
export default Login