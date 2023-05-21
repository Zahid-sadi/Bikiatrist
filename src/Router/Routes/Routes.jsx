import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/Logout/signUp";

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
      ]
    },
  ]);
  export default router;