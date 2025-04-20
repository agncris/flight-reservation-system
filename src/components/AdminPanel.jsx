import React, { useState, useEffect } from 'react';
import { fetchFlights } from '../services/apiService';

const AdminPanel = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadFlights = async () => {
      try {
        const data = await fetchFlights();
        setFlights(data);
        setLoading(false);
      } catch (err) {
        setError('Error al cargar los vuelos');
        setLoading(false);
      }
    };

    loadFlights();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Panel de Administración</h2>
      
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Estadísticas</h5>
              <p className="card-text">Total de vuelos: {flights.length}</p>
              <p className="card-text">Vuelos activos: {flights.filter(f => f.completed === false).length}</p>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Lista de Vuelos</h5>
              {loading ? (
                <div className="text-center">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Cargando...</span>
                  </div>
                </div>
              ) : error ? (
                <div className="alert alert-danger">{error}</div>
              ) : (
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {flights.map((flight) => (
                        <tr key={flight.id}>
                          <td>{flight.id}</td>
                          <td>{flight.title}</td>
                          <td>
                            <span className={`badge ${flight.completed ? 'bg-success' : 'bg-warning'}`}>
                              {flight.completed ? 'Completado' : 'Activo'}
                            </span>
                          </td>
                          <td>
                            <button className="btn btn-sm btn-primary me-2">Editar</button>
                            <button className="btn btn-sm btn-danger">Eliminar</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;