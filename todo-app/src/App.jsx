import { useEffect, useState } from 'react'
import Login from './Login'
import TodoApp from './TodoApp'
import { Link, Route, Routes } from 'react-router';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect[()=>{
    const loggedInStatus = localStorage.getItem("loggedIn")
    if(loggedInStatus === "true"){
      setIsLoggedIn(true)
    }
  },[]]

  const handleLogin =()=>{
    localStorage.setItem("loggedIn", "true");
    setIsLoggedIn(false)
  }


  return (
    <>

      {
        isLoggedIn ? (
          <TodoApp />
        ) : (
          <Login onLogin={() => setIsLoggedIn(true)} />
        )
      }
    </>
  )
}

export default App
