import React from "react";
import Main from "./Main";
import Chat from "./components/Ui/Chat";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
    </Router>
  );
}

export default App;
