import { useState } from 'react'
import Login from './Login'
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
