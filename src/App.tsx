import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";

import Home from "./Pages/Home";
import Apropos from "./Pages/Propos";
import EtudesEtranger from "./Pages/Services/EtudesEtranger";
import WorkStudy from "./Pages/Services/WorkStudy.jsx";
import Header from "./components/header";
import Footer from "./components/footer";

// Composant layout contenant Header, Footer et Outlet (zone de contenu dynamique)
function RootLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        // path: "home",
        index: true,
        element: <Navigate to="/home" />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "a-propos",
        element: <Apropos />,
      },
      {
        path: "services",
        children: [
          { path: "etudes-a-l-etranger", element: <EtudesEtranger /> },
          { path: "work-study", element: <WorkStudy /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
