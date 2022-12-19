import { NavLink } from "react-router-dom";
import  './Navbar.css';
import GrowMore from "./GrowMore.png"
export default function Navbar(){
// const Link_left=[
//     {Path:"/", Text:"Home"},
//      {Path:"/product", Text:"Product"},
//       {Path:"/pricing", Text:"Pricing"},
//        {Path:"/solutions", Text:"Solution"},
//         {Path:"/customer", Text:"Customer"},
//          {Path:"/resourses", Text:"Resourses"},
//           {Path:"/partner", Text:"Partenr"},
          

// ]

// const Link_right=[
// {Path:"/language", Text:"Language"},
//            {Path:"/login", Text:"Login"},

//             {Path:"/demo", Text:"Demo"},
// ]
const styles={
 textDecoration: "none", fontSize:"15px", lineHeight:"23px", fontWeight:"500", color:"#00000a"
}

    return <div className="Navbar">
       <div className="navbar_left" >
            <NavLink style={styles} to={"/"}><div>< img src={GrowMore} alt="Logo" style={{width:"200px"}}/></div></NavLink>
            <NavLink style={styles} to={"/product"}><div>Product</div></NavLink>
            <NavLink style={styles} to={"/pricing"}><div>Pricing</div></NavLink>
            <NavLink style={styles} to={"/solutions"}><div>Solution</div></NavLink>
            <NavLink style={styles} to={"/customer"}><div>Customer</div></NavLink>
            <NavLink style={styles} to={"/resourses"}><div>Resourses</div></NavLink>
            <NavLink style={styles} to={"/partner"}><div>Partenr</div></NavLink>
       </div>
        <div className="navbar_right">
            <NavLink style={styles} to={"/language"}> <div>Language</div></NavLink>
            <NavLink style={styles} to={"/login"}>   <div>Login</div></NavLink>
            <NavLink style={styles} to={"/demo"}> <div>Demo</div></NavLink>
        </div>
    </div>
}