import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VidyaAndFaishal from "./pages/VidyaAndFaishal/VidyaAndFaishal";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>default!</div>,
  },
  {
    path: "/test",
    element: <div>test</div>,
  },
  {
    path: "/vidyaandfaishal",
    element: <VidyaAndFaishal />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
