import { createBrowserRouter } from "react-router-dom";

import App from "./pages/App/App";
import Players from "./pages/Players/Players";
import History from "./pages/History/History";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/players",
    element: <Players />
  },
  {
    path: "/history",
    element: <History />,
  },
])