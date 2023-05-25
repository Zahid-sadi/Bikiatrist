import Main from "../../Layout/Main";
import CheckOut from "../../Pages/CheckoOut/CheckOut";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/Logout/signUp";
import ViewDetails from "../../Pages/ViewDetails/ViewDetails";

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
            path:'/login',
            element:<Login></Login>,
        },
        {
            path:'/signUp',
            element:<SignUp></SignUp>,
        },
        {
            path:'/viewdetails/:id',
            element:<ViewDetails></ViewDetails>,

            loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'checkout/:id',
          element:<CheckOut></CheckOut>,
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        }
      ]
    },
  ]);
  export default router;