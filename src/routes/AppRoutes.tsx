import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

import HomePage from "../pages/Home/HomePage";
import AboutPage from "../pages/About/AboutPage";
import ProfilePage from "../pages/Profile/ProfilePage";
import LoginPage from "../pages/Login/LoginPage";


const routes = [
    {
      path: '/',
      layout: MainLayout,
      element: <HomePage />,
      isPrivate: true,
    },
    {
      path: '/about',
      layout: MainLayout,
      element: <AboutPage />,
      isPrivate: true,
    },
    {
      path: 'profile/:userId',
      layout: MainLayout,
      element: <ProfilePage />,
      isPrivate: true,
    },
    {
      path: 'auth/login',
      layout: AuthLayout,
      element: <LoginPage />,
      isPrivate: false,
    },
  ];
  
  export default routes;
