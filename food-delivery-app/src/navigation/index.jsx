import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import Menu from "../pages/Menu";
import PaymentSucess from "../pages/PaymentSucess";


import {Header} from "../components/Header";

const Navigation = () =>{
    return(

        <BrowserRouter>
        <Header/>
        <Routes>

            

        <Route path="/" element={<Home />} />

        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/PaymentSucess" element={<PaymentSucess />} />

        </Routes>
        
        
        </BrowserRouter>

    )
}

export default Navigation;