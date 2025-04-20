import React from 'react';
import useForm from '../hooks/useForm';

const BookingForm = () => {
  const validate = (values) => {
    const errors = {};
    if (!values.name) errors.name = 'El nombre es obligatorio.';
    if (!values.email) errors.email = 'El correo es obligatorio.';
    if (!values.flight) errors.flight = 'Debes seleccionar un vuelo.';
    return errors;
  };

  const onSubmit = (values) => {
    alert(`Reserva confirmada para ${values.name}. Vuelo: ${values.flight}`);
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    { name: '', email: '', flight: '' },
    validate,
    onSubmit
  );

  return (
    <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '480px' }}>
      <h3>Formulario de Reserva</h3>
      <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name}</p>}
      </div>
      <div className="mb-3">
        <label className="form-label">Correo Electrónico</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          className="form-control"
        />
        {errors.email && <p className="text-danger">{errors.email}</p>}
      </div>
      <div className="mb-3">
        <label className="form-label">Vuelo</label>
        <select
          name="flight"
          value={values.flight}
          onChange={handleChange}
          className="form-select"
        >
          <option value="">Selecciona un vuelo</option>
          <option value="Vuelo 181">Vuelo 181</option>
          <option value="Vuelo 282">Vuelo 282</option>
          <option value="Vuelo 383">Vuelo 383</option>
        </select>
        {errors.flight && <p className="text-danger">{errors.flight}</p>}
      </div>
      <button type="submit" className="btn btn-success w-100">
        Confirmar Reserva
      </button>
    </form>
  );
};

export default BookingForm;