import { BrowserRouter, Routes, Route, Router, Link } from "react-router-dom";

export default function Navbar(){


    return(


   <ul>
         <li><Link to='/'>Home Page</Link></li>
         <li><Link to='/input'>Form</Link></li>
</ul> 


    )
}