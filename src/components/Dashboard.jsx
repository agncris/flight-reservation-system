import React, { useEffect, useState } from 'react';
import { fetchFlights } from '../services/apiService';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [flights, setFlights] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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

  const handleBookFlight = (flightId) => {
    navigate(`/booking?flightId=${flightId}`);
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger mt-4" role="alert">
        {error}
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Vuelos Disponibles</h2>
      <div className="row">
        {flights.map((flight) => (
          <div key={flight.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{flight.title}</h5>
                <div className="card-text">
                  <p><strong>Origen:</strong> {flight.origin}</p>
                  <p><strong>Destino:</strong> {flight.destination}</p>
                  <p><strong>Fecha:</strong> {flight.date}</p>
                  <p><strong>Salida:</strong> {flight.departureTime}</p>
                  <p><strong>Llegada:</strong> {flight.arrivalTime}</p>
                  <p><strong>Precio:</strong> €{flight.price}</p>
                  <p>
                    <strong>Asientos disponibles:</strong>{' '}
                    <span className={`badge ${flight.availableSeats > 0 ? 'bg-success' : 'bg-danger'}`}>
                      {flight.availableSeats}
                    </span>
                  </p>
                </div>
                <button
                  className="btn btn-primary w-100"
                  onClick={() => handleBookFlight(flight.id)}
                  disabled={flight.availableSeats === 0 || flight.completed}
                >
                  {flight.availableSeats === 0 ? 'Sin disponibilidad' : 'Reservar'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;