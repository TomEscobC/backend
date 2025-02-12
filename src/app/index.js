require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); // Módulo bcrypt para el hash de los datos de register
const conectarDB = require("../config/db");  // Asegúrate de que la ruta sea correcta
const session = require('express-session'); // Importa express-session para gestionar el inicio de usuario

// Rutas de cliente, cabaña , Reserva
const clientRoutes = require("../routes/clientRoutes");
const cabinRoutes = require("../routes/cabinRoutes");
const reservationRoutes = require("../routes/reservationRoutes");
const registerRoutes = require("../routes/registerRoutes");



const app = express();

// Conectar a la base de datos
conectarDB();

// Middleware
app.use(express.json());
app.use(cors());

// Rutas con prefijo /api/
app.use("/api/clients", clientRoutes);  // Ruta para clientes
app.use("/api/cabins", cabinRoutes);  // Ruta para cabañas
app.use("/api/reservations", reservationRoutes);  // Ruta para reservas
app.use("/api/register",registerRoutes); //Ruta para crear usuarios
app.use("/api/login"); //Ruta para iniciar sesión


// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
