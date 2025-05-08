import React from "react";
import {BrowserRouter as Router, Route, Routes, Link, Navigate} from "react-router-dom";
import MyReactComponent from "./myReact";
import MyReactSecond from "./reactSecondElement";

const MyReactApp = () => {
  return (
    <Router>
      {/*<nav>*/}
      {/*  <Link to="/dashboard">Dashboard</Link> | <Link to="/react-details">React Details</Link>*/}
      {/*</nav>*/}

      <Routes>
        <Route path="/react" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<MyReactComponent />} />
        <Route path="/react-details" element={<MyReactSecond />} />
      </Routes>
    </Router>
  );
};

export default MyReactApp;
