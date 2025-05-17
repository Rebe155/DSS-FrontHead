import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "@components/layout/MainLayout";
import SplashPage from "@pages/SplashPage/SplashPage";
import HomePage from "@pages/home/HomePage";
import LoginPage from "@pages/auth/Login/LoginPage";
import WelcomePage from "@pages/auth/Welcome/WelcomePage";
import SignUpPage from "@pages/auth/SignUp/SignUpPage";
import PasswordPage from "@pages/auth/PasswordReset/PasswordPage";
import MailScreen from "@pages/auth/PasswordReset/MailScreen";
import NewPasswordPage from "@pages/auth/PasswordReset/NewPasswordPage";
import SuccessPage from "@pages/auth/PasswordReset/SuccessPage";
import ProfilePage from "@pages/profile/ProfilePage";
import HelpPage from "@pages/help/HelpPage";
import ErrorPage from "@components/ErrorPage/ErrorPage";
import CoursesPage from "./pages/courses/CoursesPage";
import IntroPythonCourse from "./pages/courses/introduction/IntroPythonCourse";
import IntroJavaCourse from "./pages/courses/introduction/IntroJavaCourse";
import IntroHTMLCourse from "./pages/courses/introduction/IntroHTMLCourse";
import IntroSwiftCourse from "./pages/courses/introduction/IntroSwiftCourse";
import TheoryPythonCourse from "./pages/courses/theory/TheoryPythonCourse";
import TheoryJavaCourse from "./pages/courses/theory/TheoryJavaCourse";
import TheoryHTMLCourse from "./pages/courses/theory/TheoryHTMLCourse";
import TheorySwiftCourse from "./pages/courses/theory/TheorySwiftCourse";
import ExercisePythonCourse from "./pages/courses/exercise/ExercisePythonCourse";
import ExerciseJavaCourse from "./pages/courses/exercise/ExerciseJavaCourse";
import ExerciseHTMLCourse from "./pages/courses/exercise/ExerciseHTMLCourse";
import ExerciseSwiftCourse from "./pages/courses/exercise/ExerciseSwiftCourse";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SplashPage />,
  },
  {
    path: "/app",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="welcome" replace />,
      },
      {
        path: "welcome",
        element: <WelcomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "password-reset",
        children: [
          {
            index: true,
            element: <PasswordPage />,
          },
          {
            path: "mail",
            element: <MailScreen />,
          },
          {
            path: "new",
            element: <NewPasswordPage />,
          },
          {
            path: "success",
            element: <SuccessPage />,
          },
        ],
      },
      {
        path: "courses",
        element: <CoursesPage />,
      },
      ///introduccion de cursos
      {
        path: "Python",
        element: <IntroPythonCourse />,
      },
      {
        path: "Java",
        element: <IntroJavaCourse />,
      },
      {
        path: "HTML",
        element: <IntroHTMLCourse />,
      },
      {
        path: "Swift",
        element: <IntroSwiftCourse />,
      },
      // Teoria de cursos
      {
        path: "TeoriaPython",
        element: <TheoryPythonCourse />,
      },
      {
        path: "TeoriaJava",
        element: <TheoryJavaCourse />,
      },
      {
        path: "TeoriaHTML",
        element: <TheoryHTMLCourse />,
      },
      {
        path: "TeoriaSwift",
        element: <TheorySwiftCourse />,
      },

      // Ejercicios cursos
      {
        path: "EjercicioPython",
        element: <ExercisePythonCourse />,
      },
      {
        path: "EjercicioJava",
        element: <ExerciseJavaCourse />,
      },
      {
        path: "EjercicioHTML",
        element: <ExerciseHTMLCourse />,
      },
      {
        path: "EjercicioSwift",
        element: <ExerciseSwiftCourse />,
      },

      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "help",
        element: <HelpPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

export default router;
