import { Counter } from "./features/counter/Counter";
import "./App.css";
import Home from "./pages/Home";
import Loginpage from "./pages/Login";
import SignupPage from "./pages/Signup"
import CartPage from "./pages/CartPage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <Loginpage></Loginpage>,
  },
  {
    path:"/signup",
    element:<SignupPage></SignupPage>
  },{
    path:"/cart",
    element:<CartPage></CartPage>
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
