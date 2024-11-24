import { Route, Routes } from "react-router-dom";
import PageNotFound from "./Pages/PageNotFound";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import Layout from "./Components/DashboardWrapper/Layout";
import Notes from "./Pages/Notes/Notes.jsx";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
