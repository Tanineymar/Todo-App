import { useState, useEffect } from "react";
import Login from "./Login";
import TodoApp from "./TodoApp";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn") === "true";
    if (loggedIn) setIsLoggedIn(true);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("loggedIn", "true"); 
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("loggedIn"); 
  };

  return (
    <div>
      {isLoggedIn ? (
        <TodoApp onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;

