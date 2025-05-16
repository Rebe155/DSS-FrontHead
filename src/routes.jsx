import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from '@components/layout/MainLayout';
import SplashPage from '@pages/SplashPage/SplashPage';
import HomePage from '@pages/home/HomePage';
import LoginPage from '@pages/auth/Login/LoginPage';
import WelcomePage from '@pages/auth/Welcome/WelcomePage';
import SignUpPage from '@pages/auth/SignUp/SignUpPage';
import PasswordPage from '@pages/auth/PasswordReset/PasswordPage';
import MailScreen from '@pages/auth/PasswordReset/MailScreen';
import NewPasswordPage from '@pages/auth/PasswordReset/NewPasswordPage';
import SuccessPage from '@pages/auth/PasswordReset/SuccessPage';
import CoursesPage from '@pages/courses/CoursesPage';
import ProfilePage from '@pages/profile/ProfilePage';
import HelpPage from '@pages/help/HelpPage';
import ErrorPage from '@components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
   {
  path: '/',
  element: <SplashPage />
}
,
  {
    path: '/app',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="welcome" replace />
      },
      {
        path: 'welcome',
        element: <WelcomePage />
      },
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'signup',
        element: <SignUpPage />
      },
      {
        path: 'home',
        element: <HomePage />
      },
      {
        path: 'password-reset',
        children: [
          {
            index: true,
            element: <PasswordPage />
          },
          {
            path: 'mail',
            element: <MailScreen />
          },
          {
            path: 'new',
            element: <NewPasswordPage />
          },
          {
            path: 'success',
            element: <SuccessPage />
          }
        ]
      },
      {
        path: 'courses',
        element: <CoursesPage />
      },
      {
        path: 'profile',
        element: <ProfilePage />
      },
      {
        path: 'help',
        element: <HelpPage />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to="/" replace />
  }
]);

export default router;