import { RouterProvider } from "react-router";
import "./App.css";
import router from "./Router/Routes/Routes";

function App() {
    return (
        <div className="m-0 p-0 ">
          <RouterProvider router= {router}></RouterProvider>
        </div>
    );
}

export default App;
