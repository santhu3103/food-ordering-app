import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Home} from "../pages/Home";
import {Register} from "../pages/Register";
import {Login} from "../pages/Login";
import {Cart} from "../pages/Cart";
import {Menu} from "../pages/Menu";
import {PaymentSucess} from "../pages/PaymentSucess";


import { Header } from "../components/Header";

const Navigation = () =>{
    return(
        <BrowserRouter>
        <Header />
        </BrowserRouter>
    )
}

export default Navigation;