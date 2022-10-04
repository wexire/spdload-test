import React from "react";
import {
  Navigate,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import { AppContainer } from "./App.styled";
import Header from "./components/Header/Header.component";

type Props = {};

const App = (props: Props) => {
  return (
    <AppContainer>
      <Router>
        <Header />
        <Routes>
          <Route path="/home" />
          <Route path="/favorite" />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </AppContainer>
  );
};

export default App;
