import { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import ThemeProvider from "./context/ThemeProvider.jsx";

const Home = lazy(() => import('./pages/Home.jsx'))
const Cart = lazy(() => import('./pages/Cart.jsx'))
const NotFound = lazy(() => import('./routes/NotFound.jsx'))
const Products = lazy(() => import('./pages/Products.jsx'))
const Details = lazy(() => import('./pages/Details.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Users = lazy(() => import('./pages/Users.jsx'))
const Dashboard = lazy(() => import('./pages/Dashboard.jsx'))
const Protected = lazy(() => import('./routes/Protected.jsx'))
const Login = lazy(() => import('./pages/Login.jsx'))
const Register = lazy(() => import('./pages/Register.jsx'))

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: '/users',
        element: <Users />
      },
      {
        path: "/product/:id",
        element: <Details />,
      },
      {
        path: '/dashboard',
        element: (
          <Protected>
            <Dashboard />
          </Protected>
        )
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <UserProvider>
    <ThemeProvider>
      <RouterProvider router={router} >
        <App />
      </RouterProvider>
    </ThemeProvider>
  </UserProvider>
);
