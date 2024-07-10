import Header from "./components/header/Header"
import "./App.css"

import { Routes, Route } from "react-router-dom"

import Characters from "./components/Characters/Characters"
import Locations from "./components/Locations/Locations"
import Episodes from "./components/Episodes/Episodes"

function App() {

  return (
    <>
      
      <Header/>

      <Routes>
        <Route path="/" element={<Characters/>}/>
        <Route path="/locations" element={<Locations/>}/>
        <Route path="/episodes" element={<Episodes/>}/>
      </Routes>

    </>
  )
}

export default App
