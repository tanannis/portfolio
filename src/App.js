import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/Navigation";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";


const App = () => {
  return (
    <Routes>
      	<Route path="/" element={<Navigation/>}>
      	<Route index element={<Home/>} />
        {/* <Route path="/portfolio" element={<Portfolio/>}/> */}

        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
     </Route>
    </Routes>
  )
}

export default App;