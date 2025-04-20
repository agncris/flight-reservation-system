import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BookingForm from './components/BookingForm';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import RoleBasedRoute from './components/RoleBasedRoute';
import AdminPanel from './components/AdminPanel';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <div className="content-wrapper">
          <div className="container my-5">
            <h1 className="text-center mb-4">Sistema de Reserva de Vuelo 🚀</h1>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/booking" element={<BookingForm />} />
              
              {/* Ruta protegida para el dashboard */}
              <Route element={<ProtectedRoute />}>
                <Route path="/dashb" element={<Dashboard />} />
              </Route>

              {/* Ruta protegida y basada en roles para el panel de administración */}
              <Route element={<ProtectedRoute />}>
                <Route element={<RoleBasedRoute allowedRoles={['admin']} />}>
                  <Route path="/dashb/admin" element={<AdminPanel />} />
                </Route>
              </Route>
            </Routes>
          </div>
        </div>
        <footer>
          <div className="container">
            <p className="mb-0">
              © {new Date().getFullYear()} Sistema de Reserva de Vuelos. Todos los derechos reservados.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;