import React from "react";
import {
  Navigate,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Header from "./components/Header/Header.component";
import HomePage from "./pages/HomePage/HomePage.component";

type Props = {};

const App = (props: Props) => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/favorite" />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
