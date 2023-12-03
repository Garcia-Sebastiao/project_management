import { Route, Routes } from "react-router-dom";
import { SignInPage } from "./pages/auth/sign-in/sign-in";
import { SignUpPage } from "./pages/auth/sign-up/sign-up";
import { HomePage } from "./pages/system/home-page";
import { ProjectsPage } from "./pages/system/projects-page";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
    </Routes>
  );
}
