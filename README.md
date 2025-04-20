# Sistema de Reserva de Vuelos ✈️

Este proyecto es una aplicación web moderna para la gestión y reserva de vuelos, desarrollada con React, React Router y Vite. Permite a los usuarios buscar vuelos disponibles, realizar reservas y gestionar su información de viaje. Los administradores tienen acceso a un panel especial para gestionar vuelos y estadísticas.

[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?style=flat-square&logo=github)](https://github.com/agncris/flight-reservation-system)

## 📌 Características

✅ Sistema de autenticación con roles (usuario/administrador)
✅ Panel de administración exclusivo con estadísticas
✅ Búsqueda y reserva de vuelos en tiempo real
✅ Interfaz intuitiva y completamente responsiva
✅ Diseño profesional con estilos personalizados
✅ Gestión de reservas y disponibilidad de asientos
✅ Preparado para integración con backend (próxima implementación)

## 📁 Estructura del Proyecto

```
├── README.md                  # Documentación del proyecto
├── eslint.config.js           # Configuración de ESLint
├── index.html                 # Archivo HTML principal
├── package.json               # Dependencias y scripts
├── vite.config.js             # Configuración de Vite
├── src/
│   ├── App.jsx                # Componente principal
│   ├── main.jsx               # Punto de entrada
│   ├── index.css              # Estilos globales
│   ├── components/            # Componentes reutilizables
│   │   ├── AdminPanel.jsx     # Panel de administración
│   │   ├── BookingForm.jsx    # Formulario de reserva
│   │   ├── Dashboard.jsx      # Panel principal
│   │   ├── Home.jsx           # Página de inicio
│   │   ├── Navigation.jsx     # Barra de navegación
│   │   ├── ProtectedRoute.jsx # Ruta protegida
│   │   └── RoleBasedRoute.jsx # Ruta basada en roles
│   ├── hooks/                 # Hooks personalizados
│   │   └── useForm.js         # Hook para formularios
│   └── services/              # Servicios
│       └── apiService.js      # Servicio de API
```

## 🚀 Instalación y Ejecución

### Clonar el Repositorio

```bash
git clone https://github.com/agncris/flight-reservation-system
cd flight-reservation-system
```

### Instalar Dependencias

```bash
npm install
```

### Ejecutar la Aplicación

```bash
npm run dev
```

Luego, abre tu navegador y accede a http://localhost:5173.

## 🛠️ Componentes Principales

### AdminPanel.jsx

- Panel exclusivo para administradores
- Gestión de vuelos y estadísticas
- Tabla interactiva con acciones

### BookingForm.jsx

- Formulario de reserva de vuelos
- Validación de datos
- Integración con el sistema de vuelos

### Dashboard.jsx

- Visualización de vuelos disponibles
- Tarjetas interactivas
- Sistema de reserva integrado

### Navigation.jsx

- Barra de navegación responsiva
- Gestión de sesión de usuario
- Acceso basado en roles

## 🎨 Diseño y Estilos

- Paleta de colores profesional
- Diseño responsivo
- Animaciones y transiciones suaves
- Componentes de Bootstrap personalizados
- Interfaz intuitiva y moderna

## 🔒 Seguridad

- Rutas protegidas
- Control de acceso basado en roles
- Validación de formularios
- Gestión de sesiones

## 👥 Autores

- [Cristian](https://github.com/agncris) - Desarrollador Frontend

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.
