import './App.css';
import { 
  BrowserRouter,
  Routes,
  Route
 } from "react-router-dom";
 import "./Pagess/Homely/Home"
import Home from './Pagess/Homely/Home';
import List from "./Pagess/List/List"
import Hotels from "./Pagess/Hotels/Hotels"

function App() {
  return (

    <div className="App">
      {/* <h3> hello world</h3> */}
    <BrowserRouter>
    <Routes>
   <Route path = "/" element ={<Home/>}/>
   <Route path = "/List" element ={<List/>}/>\
   <Route path = "/Hotels" element ={<Hotels/>}/>


    
   
    </Routes>
    </BrowserRouter>
    {/* <Home/> */}
    </div>
  );
}

export default App;
