import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/MainMenu/Menu/Menu";
import OurShop from "../pages/Shop/OurShop";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "/shop/:category",
        element: <OurShop />,
      },
    ],
  },
]);
