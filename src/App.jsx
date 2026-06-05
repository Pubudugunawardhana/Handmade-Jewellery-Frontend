import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AuthProvider } from './context/AuthContext';
import './index.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Collections from './pages/Collections';
import About from './pages/About';
import Offers from './pages/Offers';
import Contact from './pages/Contact';
import Customize from './pages/Customize';
import TryOn from './pages/TryOn';

const Home = () => (
  <main>
    <Hero />
    <Features />
    <Footer />
  </main>
);

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/about" element={<About />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/customize" element={<Customize />} />
          <Route path="/try-on" element={<TryOn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <ToastContainer
          position="bottom-right"
          theme="light"
          toastClassName="border border-[#e8e0d0] shadow-lg font-sans"
        />
      </Router>
    </AuthProvider>
  );
}

export default App;
