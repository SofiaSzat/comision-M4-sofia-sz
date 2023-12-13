import { createBrowserRouter } from "react-router-dom";

//VISTAS//
import Inicio from "./views/Inicio";

import LogIn from "./views/LogIn";

import Registrate from "./views/registrate";

import NuevoPosteo from "./views/nuevoPosteo";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Inicio/>,
    },{
        path: "/login",
        element: <LogIn/>,
      }, {
        path: "/newPost",
        element: <NuevoPosteo/>,
      }, {
        path: "/registro",
        element: <Registrate/>,
      },

  ]);
  

  export {router}