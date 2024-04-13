import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import  HomePage  from "./pages/homePage/HomePage";
import  Navbar  from "./components/navBar/NavBar";
import Input from "./pages/input/Input";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar></Navbar>
      
      <Routes>
      
        <Route path="/" element={<HomePage />} />
        <Route path="/input" element={<Input />} />
          
        
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
