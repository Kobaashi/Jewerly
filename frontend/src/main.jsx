import App from './App.jsx'
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Link,
} from "react-router-dom"
import "./index.css"
import ErrorPage from './error-page.jsx'
import Catalog from './components/Catalog.jsx'
import AboutUs from './components/AboutUs.jsx'
import Profile from './components/Profile.jsx'
import LogIn from './components/LogIn.jsx'
import SignUp from './components/SignUp.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/catalog",
    element: <Catalog />,
    errorElement: <ErrorPage />
  },
  {
    path: "/about-us",
    element: <AboutUs />,
    errorElement: <ErrorPage />
  },
  {
    path: "/profile",
    element: <Profile />,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <LogIn />,
    errorElement: <ErrorPage />
  },
  {
    path: "/signup",
    element: <SignUp />,
    errorElement: <ErrorPage />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
