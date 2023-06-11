import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Accessories from "../../Pages/Accessories/Accessories";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/Logout/signUp";
import Orders from "../../Pages/Orders/Orders";
import Services from "../../Pages/Services/Services";
import ViewDetails from "../../Pages/ViewDetails/ViewDetails";
import Footer from "../../Shared/Footer/Footer";

const { createBrowserRouter } = require("react-router-dom");


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
            path:'/about',
            element:<About></About>
        },
        {
            path:'/login',
            element:<Login></Login>,
        },
        {
            path:'/services',
            element: <Services></Services>
        },
        {
            path:'/accessories',
            element: <Accessories></Accessories>,
        },
      
        {
            path:'/signUp',
            element:<SignUp></SignUp>,
        },
        {
          path:'/footer',
          element:<Footer></Footer>,
      },
        {
            path:'/viewdetails/:id',
            element:<ViewDetails></ViewDetails>,

            loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/checkout/:id',
          element: <CheckOut></CheckOut>,
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/orders',
          element:<Orders></Orders>
        }
      ]
    },
  ]);
  export default router;