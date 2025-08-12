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
import WorkStudy from "./Pages/Services/WorkStudy";
import ColoniesVacances from "./Pages/Services/ColoniesVacances";
import StageInternational from "./Pages/Services/StageInternational";
import ImmigrationCanadienne from "./Pages/Services/ImmigrationCanadienne";
import VoyagesDecouvertes from "./Pages/Services/VoyagesDecouvertes";
import StudentCompetitions from "./Pages/Services/StudentCompetitions";
import Header from "./components/header";
import Footer from "./components/footer";
import WorkAccordionMenu from "./components/AccordionMenu";

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
          {
            path: "/services/stage-a-l-international-usa",
            element: <StageInternational />,
          },
          {
            path: "/services/colonies-de-vacances",
            element: <ColoniesVacances />,
          },
          {
            path: "/services/immigration-canadienne",
            element: <ImmigrationCanadienne />,
          },
          {
            path: "/services/voyages-decouvertes",
            element: <VoyagesDecouvertes />,
          },
          {
            path: "/services/student-competitions",
            element: <StudentCompetitions />,
          },
        ],
      },

      { element: <div>"FAQS"</div>, path: "faq" },
      { element: <div>"Info & Actu"</div>, path: "news" },
      { element: <div>"Contact"</div>, path: "contact" },
      { element: <WorkAccordionMenu />, path: "accordion-menu" },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
