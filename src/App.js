import {BrowserRouter, Routes, Route} from "react-router-dom";
import Form from "./Form";
import './App.css';
import Home from "./Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}