import { RouterProvider } from "react-router-dom";
import DefaultLayout from "./templates/Layout1.jsx";
import { router } from "./router.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

 
 const App = () => {

  return (
    <AuthProvider>
    <DefaultLayout>
   <RouterProvider router={router} />
    </DefaultLayout>
    </AuthProvider>
  )
};

export default App


