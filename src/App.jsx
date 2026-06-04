import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import './index.css';

const Home = () => (
  <div className="container" style={{ marginTop: '4rem', textAlign: 'center' }}>
    <h1 className="animate-fade-in" style={{ fontSize: '3rem', color: 'var(--accent)' }}>Welcome to Wave Mirissa</h1>
    <p className="mt-2 animate-fade-in" style={{ fontSize: '1.2rem', animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
      Discover unique, ocean-inspired handmade jewellery.
    </p>
  </div>
);

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <ToastContainer position="bottom-right" theme="dark" />
      </Router>
    </AuthProvider>
  );
}

export default App;
