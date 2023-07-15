import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import GlobalLayout from "./components/GlobalLayout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<GlobalLayout />}>
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
