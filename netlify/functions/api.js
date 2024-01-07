const express = require("express");
const { Router } = require("express");
const serverless = require("serverless-http");
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

const api = express();
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

const router = Router();

router.post('/enviar-correo', (req, res) => {
    // Obtener datos del formulario
    const nombre = req.body.nombre;
    const correo = req.body.correo;
    const mensaje = req.body.mensaje;

    // Configurar el servicio de correo
    const transporter = nodemailer.createTransport({
        service: 'Gmail',  // Puedes cambiarlo según tu proveedor de correo
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },
    });

    // Configurar el contenido del correo
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,  // Reemplaza con tu dirección de correo destinatario
        subject: 'Nuevo mensaje del formulario de contacto',
        text: `Nombre: ${nombre}\nCorreo: ${correo}\nMensaje: ${mensaje}`,
    };

    // Enviar el correo
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            // Enviar un mensaje de error al cliente
            return res.status(500).send('Error al enviar el correo'+ process.env.EMAIL_USER + process.env.EMAIL_PASS);
        }
    
        // Mostrar una alerta en la misma página usando JavaScript
        const alertMessage = '¡Correo enviado con éxito!';
        const script = `<script>alert('${alertMessage}'); window.location.href = '/';</script>`;
        
        // Enviar el script al cliente
        res.send(script);
    });
});

api.use("/api/", router);

exports.handler = serverless(api);
 