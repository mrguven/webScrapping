import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  HomePage  from "./pages/homePage/HomePage";
import  Navbar  from "./components/navBar/NavBar";
import Input from "./pages/input/Input";
import MusicPlayer from "./pages/musicPlayer/MusicPlayer";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar></Navbar>
      
      <Routes>
      
        <Route path="/" element={<HomePage />} />
        <Route path="/input" element={<Input />} />
        <Route path="/musicPlayer" element={<MusicPlayer />}/>
          
        
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
