let usuario, contrasenia;
let enviarBoton = document.getElementById('enviar');

function enviar (){

    usuario = document.getElementById('usuario');
    contrasenia = document.getElementById('contrasenia');

    console.log( "El nombre de usuario es '" + usuario.value + "' ");
    console.log( "La contraseña es '" + contrasenia.value + "' ");

}

enviarBoton.addEventListener('click', enviar);


/*
Para enviar los valores por correo electrónico, necesitarás utilizar alguna forma de servicio o API de correo electrónico para enviar los datos desde el lado del servidor. JavaScript en el navegador no tiene la capacidad de enviar correos electrónicos directamente.

Hay varias opciones para lograr esto. Una opción común es utilizar un lenguaje de programación en el lado del servidor como Node.js y enviar el correo electrónico utilizando una biblioteca de correo electrónico como Nodemailer.

Aquí tienes un ejemplo de cómo podrías utilizar Nodemailer en un entorno Node.js para enviar un correo electrónico con los valores del usuario y la contraseña:

1. Asegúrate de tener Node.js instalado en tu sistema.

2. Crea un archivo `enviarCorreo.js` con el siguiente contenido:

```javascript
const nodemailer = require('nodemailer');

async function enviarCorreo(usuario, contrasenia) {
  // Configurar el transporte de correo
  let transporter = nodemailer.createTransport({
    service: 'nombre_de_servicio',
    auth: {
      user: 'tu_correo@ejemplo.com',
      pass: 'tu_contraseña'
    }
  });

  // Configurar el contenido del correo
  let correoOptions = {
    from: 'tu_correo@ejemplo.com',
    to: 'destinatario@ejemplo.com',
    subject: 'Datos de inicio de sesión',
    text: `El nombre de usuario es: ${usuario}\nLa contraseña es: ${contrasenia}`
  };

  // Enviar el correo electrónico
  let info = await transporter.sendMail(correoOptions);
  console.log('Correo enviado: ' + info.messageId);
}

// Obtener los valores de usuario y contraseña
let usuario = 'valor_del_usuario';
let contrasenia = 'valor_de_la_contrasenia';

// Llamar a la función enviarCorreo
enviarCorreo(usuario, contrasenia);
```

3. Reemplaza `'nombre_de_servicio'`, `'tu_correo@ejemplo.com'`, `'tu_contraseña'`, `'destinatario@ejemplo.com'`, `'valor_del_usuario'` y `'valor_de_la_contrasenia'` con los valores reales correspondientes.

4. Ejecuta el script desde la línea de comandos utilizando el comando `node enviarCorreo.js`. Esto enviará un correo electrónico con los valores del usuario y la contraseña al destinatario especificado.

Ten en cuenta que este es solo un ejemplo básico y hay muchas más opciones y configuraciones disponibles con Nodemailer. Además, también hay otras bibliotecas y servicios de correo electrónico que puedes utilizar dependiendo de tus necesidades y preferencias.
*/