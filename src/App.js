import { RouterProvider } from "react-router";
import "./App.css";
import router from "./Router/Routes/Routes";

function App() {
    return (
        <div data-theme="corporate" className="">
          <RouterProvider router= {router}></RouterProvider>
        </div>
    );
}

export default App;
