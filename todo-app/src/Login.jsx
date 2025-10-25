import { useState , useEffect} from "react"

function Login({ onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")

    const handleLogin = (event) => {
        event.preventDefault();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email.trim() || !password.trim()) {
            setError("Please fill out both email and password.");
        } else if (!emailPattern.test(email)) {
            setError("Please enter a valid email address.")
        } else if (password.length < 6) {
            setError("Password must be atleast 6 character long.")
        } else {
            setError("")
            localStorage.setItem("loggedIn", "true")
            onLogin();
            setEmail("");
            setPassword("");

        }


    }
    return (
        <div className=" relative flex flex-col items-center justify-center h-screen bg-blue-950">
            {
                error && <div className="absolute top-10 bg-gray-200 text-red-500 p-2.5 rounded-lg flex items-center m-6">
                    <p className="font-mono font-bold text-sm">{error}</p>
                    <button onClick={() => setError("")} ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></button>
                </div>
            }

            <form className="flex flex-col bg-blue-900 text-white p-8 rounded-2xl " onSubmit={handleLogin}>
                <h2 className="text-4xl mb-2.5">Login</h2>
                <p className="text-gray-300">Login to continue</p>
                <input className="border rounded-lg p-2 my-3 w-full outline-none "
                    type="email" onChange={(event) => setEmail(event.target.value)} name="email" placeholder="Enter Email" />
                <input className="border p-2 mb-3 w-full rounded-lg outline-none"
                    type="password" onChange={(event) => setPassword(event.target.value)} name="password" placeholder="Enter Password" />
                <button className="bg-blue-700 hover:bg-blue-800 hover:border-white active:bg-blue-800 rounded-lg  text-white py-2 border border-blue-700">Login</button>
            </form>


        </div>
    )
}
export default Login