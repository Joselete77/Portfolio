const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./assets'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Ruta para el formulario
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Ruta para manejar el envío del formulario
app.post('/enviar-correo', (req, res) => {
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
            return res.status(500).send('Error al enviar el correo');
        }
    
        // Mostrar una alerta en la misma página usando JavaScript
        const alertMessage = '¡Correo enviado con éxito!';
        const script = `<script>alert('${alertMessage}'); window.location.href = '/';</script>`;
        
        // Enviar el script al cliente
        res.send(script);
    });
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});

