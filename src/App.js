import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path="/portfolio"/>
        
        <Route path="/about" />
        <Route path="/contact"/>
      </Route>
    </Routes>
  )
}

export default App;