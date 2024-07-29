import './App.css';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Route, Routes } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import TopBar from './Components/TopBar';
import NavBar from './Components/NavBar';
import Carousel from './Components/Carousel';
import Product from './Components/Product';
import Reservation from './Components/Reservation';



function App() {
  return (
    <BrowserRouter>
    <TopBar/>
    <NavBar/>
    <Carousel/>
    <Product/>
    <Reservation/>
    <Routes>
    </Routes>
    <Toaster position="bottom-bottom-end"/>
    </BrowserRouter>
  );
}

export default App;
