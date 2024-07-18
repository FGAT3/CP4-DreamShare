import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";

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

import {
  fetchApi,
  fetchMultipleApis,
  handleFormAction,
  sendData,
} from "./services/api.service";
import login from "./services/login.service";
import register from "./services/register.service";
import AuthProtection from "./services/AuthProtection";
import ContactPage from "./pages/ContactPage/ContactPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";

const baseUrlArticle = "/api/articles";
const baseUrlDream = "/api/dreams";
const baseUrlUser = "/api/users";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () => fetchMultipleApis([baseUrlDream, baseUrlArticle]),
      },
      {
        path: "/article",
        element: <ArticlePage />,
        loader: () => fetchApi(`${baseUrlArticle}`),
      },
      {
        path: "/dream",
        element: <DreamPage />,
        loader: () => fetchApi(`${baseUrlDream}`),
      },
      {
        path: "/login",
        element: <LoginPage />,
        action: async ({ request }) => {
          const result = await handleFormAction(request, login);
          if (result.success) {
            localStorage.setItem("token", result.auth.token);
            return redirect("/");
          }
          return null;
        },
      },
      {
        path: "/registration",
        element: <RegistrationPage />,
        action: async ({ request }) =>
          handleFormAction(request, register, `/login`),
      },
      {
        path: "/profile/:id",
        element: (
          <AuthProtection>
            <ProfilePage />
          </AuthProtection>
        ),
        loader: async ({ params }) => fetchApi(`${baseUrlUser}/${params.id}`),
        action: async ({ request, params }) => {
          const formData = await request.formData();
          const data = Object.fromEntries(formData.entries());

          const method = request.method.toUpperCase();

          const handleMethod = async (httpMethod) => {
            await sendData(`${baseUrlUser}/${params.id}`, data, httpMethod);
          };
          await handleMethod(method);
          return redirect("/");
        },
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
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
