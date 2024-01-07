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
    const nombre = req.body.nombre;
    const correo = req.body.correo;
    const mensaje = req.body.mensaje;
    const EMAIL_USER = process.env.EMAIL_USER;
    const EMAIL_PASS = process.env.EMAIL_PASS;

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASS
        },
    });

    const mailOptions = {
        from: EMAIL_USER,
        to: EMAIL_USER, 
        subject: 'Nuevo mensaje del formulario de contacto',
        text: `Nombre: ${nombre}\nCorreo: ${correo}\nMensaje: ${mensaje}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            return res.status(500).send('Error al enviar el correo'+ EMAIL_USER + EMAIL_PASS);
        }
    
        const alertMessage = '¡Correo enviado con éxito!';
        const script = `<script>alert('${alertMessage}'); window.location.href = '/';</script>`;
        
        res.send(script);
    });
});

api.use("/api/", router);

exports.handler = serverless(api);
 