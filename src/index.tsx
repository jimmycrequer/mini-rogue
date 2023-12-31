import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Rules from "./pages/Rules";
import CompetencesTree from "./pages/CompetencesTree";
import CompetencesDescription from "./pages/CompetencesDescription";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      { path: "/", Component: Home },
      { path: "rules", Component: Rules },
      { path: "tree", Component: CompetencesTree },
      { path: "description", Component: CompetencesDescription },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
