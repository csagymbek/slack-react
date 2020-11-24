import React from "react";
import "../styles/App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function App() {
  return (
    <div className="app">
      {/* Header  */}
      <Header />
      <div className="app__body">
        {/* Sidebar  */}
        <Sidebar />
        {/* Chat Screen with React Router  */}
      </div>
    </div>
  );
}
