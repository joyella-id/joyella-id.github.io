import React from "react";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import VidyaAndFaishal from "./pages/VidyaAndFaishal/VidyaAndFaishal";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Link to="/test">go to test</Link>
      </div>
    ),
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
