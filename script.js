// 1. Seleccionamos el formulario por su ID
const formulario = document.getElementById('miFormulario');

// 2. Escuchamos el evento de envío
formulario.addEventListener('submit', function(event) {
    // Frenamos el envío real para que no se recargue la página
    event.preventDefault();

    const nombreUsuario = document.getElementById('nombre').value;

    // 3.  Mostramos un cartel de alerta
    alert('¡Gracias ' + nombreUsuario + '! Tu mensaje fue recibido correctamente.');

    // 4. Cambiamos el estilo del botón para que se note la interacción
    const boton = document.getElementById('btn-enviar');
    boton.innerText = '¡Enviado!';
    boton.style.backgroundColor = '#16a34a'; 
    
    // Limpiamos los campos
    formulario.reset();
});