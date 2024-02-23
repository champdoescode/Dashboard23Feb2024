import { Route, Routes } from "react-router-dom";
import Home from "./components/Dashboard/Home";
import App from "./App";
import Dashlayout from "./components/Dashlayout";
import StaffDetails from "./components/StaffDetails";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path='' element={<Dashlayout />} />
        <Route path="home" element={<StaffDetails />} />
        <Route path="teams" element={<div>Teams page</div>} />
      </Route>
    </Routes>
  );
};
