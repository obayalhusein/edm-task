// React Router Dom
import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

// Pages
const LoginPage = lazy(() => import("./pages/Login"));
const DashboardHomePage = lazy(() => import("./pages/Dashboard"));
const NotFound = lazy(() => import("./pages/NotFound"));


function App() {

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardHomePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
