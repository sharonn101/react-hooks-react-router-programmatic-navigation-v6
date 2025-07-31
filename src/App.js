import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";

function App() {
  const [isLoggenIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const login =() =>setIsLoggedIn(true);
  const logout =() =>setIsLoggedIn(false);

  useEffect(() =>{
    if(isLoggenIn){
      navigate("/");
    }else{
      navigate("/login");
    }
  },[isLoggenIn])

  return (
    <div className="app">
       {isLoggenIn ? <NavBar logout={logout}/> : <Navigate to="/login"/>}
      <Outlet context={login}/>
    </div>
  );
}

export default App;
