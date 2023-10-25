import { RouterProvider, createBrowserRouter } from "react-router-dom";


import AppLayouts from "./AppLayouts";
import Login from "./ui/Login";

import "./index.css";
import SignUp from "./ui/SignUp";





const router = createBrowserRouter([
  { path: "/", element: <AppLayouts /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
]);



function App() {
  return <RouterProvider router={router} />;
}

export default App;
