

import {Routes, Route} from "react-router-dom"
import Home from "../Pages/Home"
import Product from "../Pages/Product"
import Pricing from "../Pages/Pricing"
import Solution from "../Pages/Solution"
import Customer from "../Pages/customers"
import Resourses from "../Pages/Resourses"
import Partenr from "../Pages/partner"
import Language from "../Pages/Language"
import Login from "../Pages/Login"
import Demo from "../Pages/Demo"
import LoginFunction from "../Pages/Authentication/login"

const AllRoutes=()=>{
    return <Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/product" element={<Product/>}></Route>
<Route path="/pricing" element={<Pricing/>}></Route>
<Route path="/solutions" element={<Solution/>}></Route>
<Route path="/customer" element={<Customer/>}></Route>
<Route path="/resourses" element={<Resourses/>}></Route>
<Route path="/partner" element={<Partenr/>}></Route>
<Route path="/language" element={<Language/>}></Route>
<Route path="/login" element={<Login/>}></Route>
<Route path="/demo" element={<Demo/>}></Route>
<Route path="/gotologin" element={<LoginFunction/>}></Route>

    </Routes>
}

export default AllRoutes;