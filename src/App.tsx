import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/Home';
import ContactsPage from "./pages/Contacts";
import SideBar from './components/SideBar';
import CreateContactPage from "./pages/CreateContactPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/create-contact" element={<CreateContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
