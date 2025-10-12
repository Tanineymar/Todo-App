import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login'
import { use } from 'react'
import TodoApp from './TodoApp'

function App() {

  const [isLoggedIn , setIsLoggedIn]=useState(false);


  return (
    <>
    {
      isLoggedIn?(
        <TodoApp/>
      ):(
        <Login onLogin={()=>setIsLoggedIn(true)}/>
      )
    }
    </>
  )
}

export default App
