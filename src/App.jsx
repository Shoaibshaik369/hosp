//import React from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import DashboardCard from "./components/DashboardCard";
import ChartCard from "./components/ChartCard";
import Calendar from "./components/Calendar";
import UserCard from "./components/UserCard";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import Appointment from "./components/sections/Appointment";

const App = () => {


  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <Routes>
          <Route path="/appointment" element={<Appointment/>}/>
          <Route/>
          <Route/>
          <Route/>
        </Routes>
      </div>
    </div>
  );
};

export default App;
