import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import ErrorPage from "../pages/404.jsx";
import Login from '../pages/Login.jsx';
import DestinationList from '../pages/destinationList.jsx';
import Home from '../pages/home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/destinations",
    element: <DestinationList />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
