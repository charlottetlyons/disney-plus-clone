import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/about",
            element: <h1>About</h1>
        }
    ]);

    return (
        <RouterProvider router={router}/>
    );
}

export default App;