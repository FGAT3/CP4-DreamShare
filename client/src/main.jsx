import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import App from "./App";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import HomePage from "./pages/HomePage/HomePage";
import ArticlePage from "./pages/ArticlePage/ArticlePage";
import DreamPage from "./pages/DreamPage/DreamPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";

// import {
//   fetchApi,
//   handleFormAction,
//   sendData,
// } from "./services/api.service";
// import login from "./services/login.service";
// import register from "./services/register.service";
// import favoriteGame from "./services/favoriteGame.service";
// import sendEmail from "./services/contact.service";
// import sendScore from "./services/score.service";
import AuthProtection from "./services/AuthProtection";
// import decodeToken from "./services/decodeToken";

// const baseUrlArticle = "/api/articles";
// const baseUrlDream = "/api/dreams";
// const baseUrlUser = "/api/users";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/article",
        element: <ArticlePage />,
      },
      {
        path: "/dream",
        element: <DreamPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/registration",
        element: <RegistrationPage />,
      },
      {
        path: "/profile/:id",
        element: (
          <AuthProtection>
            <ProfilePage />
          </AuthProtection>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
    />
  </React.StrictMode>
);
