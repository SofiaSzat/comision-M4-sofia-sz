import { RouterProvider } from "react-router-dom";
import DefaultLayout from "./templates/Layout1.jsx";
import { router } from "./router.jsx";

 
 const App = () => {

  return (
    <DefaultLayout>
   <RouterProvider router={router} />
    </DefaultLayout>
  )
};

export default App


