import { Route, Routes } from "react-router-dom";
import Langing from "./components/landing";
import Login from "./components/login";
import Register from "./components/register";

 const App = () => { 
  return (
    <div className="App">
      <Routes>
          <Route exact path="/" element={<Langing/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
  );  
}

export default App;
