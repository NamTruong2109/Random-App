import {BrowserRouter, Routes, Route} from "react-router-dom";
import Form from "./components/Form";
import './App.css';
import Home from "./components/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}