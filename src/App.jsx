import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Spin } from "antd";

const PageNotFound = React.lazy(() => import("./Pages/PageNotFound"));
const Dashboard = React.lazy(() => import("./Pages/Dashboard/Dashboard.jsx"));
const Layout = React.lazy(() => import("./Components/DashboardWrapper/Layout"));
const Notes = React.lazy(() => import("./Pages/Notes/Notes.jsx"));

function App() {
  return (
    <>
      <Suspense
        fallback={
          <Spin
            className="h-screen flex place-items-center justify-center"
            size="large"
          />
        }
      >
        <Routes>
          {/* === Public Routes === */}
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="notes" element={<Notes />} />
          </Route>

          {/* === Unknown Routes === */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
