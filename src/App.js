import { Route, Routes } from "react-router-dom";
import Langing from "./components/landing";
import Login from "./components/login";
import Register from "./components/register";
import Button from "./components/button";
import Input from "./components/input";
import PanelUser from "./components/panelUser";
import Modal from "./components/modal";

 const App = () => { 
  return (
    <div className="App">
      <Routes>
          <Route exact path="/" element={<Langing/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/user/:id" element={<PanelUser/>} />
          <Route path="/button" element={<Button/>} /> {/* ruta prueba */}
          <Route path="/input" element={<Input/>} /> {/* ruta prueba */}
          <Route path="/modal" element={<Modal/>} /> {/* ruta prueba */}
      </Routes>
    </div>
  );  
}

export default App;
