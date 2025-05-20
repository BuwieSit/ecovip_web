
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Head from './pages/HeaderFolder/header.js';
import Home from './pages/Home/Home.js';
import Content from './pages/Content/content.js';
import Test from './pages/Test/Test.js';

export default function App() {
 
  return (
    <BrowserRouter>
        <Head />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
        </Routes>

        <Home />
        <Content />
        <Test />

    </BrowserRouter>
        
 
    

  );
}

