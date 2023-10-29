// React Router Dom
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";

// Redux
import { RootState } from "./redux/types";
import { useSelector } from "react-redux";

// Pages
const LoginPage = lazy(() => import("./pages/Login"));
const DashboardHomePage = lazy(() => import("./pages/Dashboard"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Components
import PageLoader from "./components/PageLoader";


const ProtecedRoute = ({ element }: { element: JSX.Element }) => {
  const { isAuth } = useSelector((state: RootState) => state.authReducer);

  if (isAuth) {
    return element;
  } else {
    return <Navigate to="/login" />;
  }
};

const App = () => {
  const { loading, isAuth } = useSelector(
    (state: RootState) => state.authReducer
  );

  const nav = useNavigate();

  useEffect(() => {
    if (!isAuth) nav("/login");
  }, [isAuth, nav]);

  if (loading) return <PageLoader />;

  return (
    <Suspense fallback="Loading...">
      <Routes>
        <Route index element={<Navigate to="/dashboard" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={<ProtecedRoute element={<DashboardHomePage />} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
