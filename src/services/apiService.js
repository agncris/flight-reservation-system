// Datos simulados de vuelos
const mockFlights = [
  {
    id: 1,
    title: "Vuelo 101 - Madrid a Barcelona",
    origin: "Madrid",
    destination: "Barcelona",
    departureTime: "08:00",
    arrivalTime: "09:30",
    price: 120,
    seats: 150,
    availableSeats: 45,
    completed: false,
    date: "2024-04-25"
  },
  {
    id: 2,
    title: "Vuelo 202 - Barcelona a París",
    origin: "Barcelona",
    destination: "París",
    departureTime: "10:15",
    arrivalTime: "12:30",
    price: 180,
    seats: 200,
    availableSeats: 12,
    completed: false,
    date: "2024-04-25"
  },
  {
    id: 3,
    title: "Vuelo 303 - Madrid a Roma",
    origin: "Madrid",
    destination: "Roma",
    departureTime: "14:00",
    arrivalTime: "16:45",
    price: 220,
    seats: 180,
    availableSeats: 78,
    completed: false,
    date: "2024-04-26"
  },
  {
    id: 4,
    title: "Vuelo 404 - París a Londres",
    origin: "París",
    destination: "Londres",
    departureTime: "09:30",
    arrivalTime: "10:45",
    price: 150,
    seats: 160,
    availableSeats: 0,
    completed: true,
    date: "2024-04-24"
  },
  {
    id: 5,
    title: "Vuelo 505 - Roma a Madrid",
    origin: "Roma",
    destination: "Madrid",
    departureTime: "17:30",
    arrivalTime: "20:00",
    price: 200,
    seats: 190,
    availableSeats: 23,
    completed: false,
    date: "2024-04-26"
  }
];

// Simular un retraso en la respuesta
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchFlights = async () => {
  try {
    // Simular un retraso de red
    await delay(1000);
    return mockFlights;
  } catch (error) {
    console.error('Error al cargar los vuelos:', error);
    throw new Error('No se pudieron cargar los vuelos. Inténtalo más tarde.');
  }
};

export const fetchFlightById = async (id) => {
  try {
    await delay(500);
    const flight = mockFlights.find(f => f.id === parseInt(id));
    if (!flight) {
      throw new Error('Vuelo no encontrado');
    }
    return flight;
  } catch (error) {
    console.error('Error al cargar el vuelo:', error);
    throw error;
  }
};