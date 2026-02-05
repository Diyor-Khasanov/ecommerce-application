import { lazy, StrictMode, Suspense } from "react";
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
        element: (
          <Suspense>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/products",
        element: (
          <Suspense>
            <Products />
          </Suspense>
        ),
      },
      {
        path: '/users',
        element: (
          <Suspense>
            <Users />
          </Suspense>
        )
      },
      {
        path: "/product/:id",
        element: (
          <Suspense>
            <Details />
          </Suspense>
        ),
      },
      {
        path: '/dashboard',
        element: (
          <Suspense>
            <Protected>
              <Dashboard />
            </Protected>
          </Suspense>
        )
      },
      {
        path: '/login',
        element: (
          <Suspense>
            <Login />
          </Suspense>
        )
      },
      {
        path: '/register',
        element: (
          <Suspense>
            <Register />
          </Suspense>
        )
      },
      {
        path: "*",
        element: (
          <Suspense>
            <NotFound />
          </Suspense>
        ),
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
