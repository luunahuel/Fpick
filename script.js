// Variables y constantes
const MAX_WIDTH_MOBILE = 768;

let fontSize = 16;

// Funciones
function ajustarFuenteParaDispositivo() {
    if (window.innerWidth <= MAX_WIDTH_MOBILE) {
        fontSize = 14;
    } else {
        fontSize = 16;
    }
    document.body.style.fontSize = `${fontSize}px`;
}

function realizarAccion(accion) {
    alert(`Has seleccionado la acción: ${accion}`);
}

// Eventos
window.onload = function() {
    ajustarFuenteParaDispositivo();
};

window.onresize = function() {
    ajustarFuenteParaDispositivo();
};

document.getElementById('inicio').onclick = function() {
    alert('Has hecho clic en Inicio');
};

document.getElementById('raffle').onclick = function() {
    alert('Lo siento, Has hecho clic en Raffle pero aun esta en proceso...');
};

document.getElementById('contacto').onclick = function() {
    alert('Has hecho clic en Contacto y te posicionara en el formulario.');
};



function LogoRedirigir() {
 window.location.href = 'http://www.tiktok.com/@fpick1985';
    //redirige a tiktok
}




/*verificar si rellena el formulario daniela y dar las gracias*/ 

document.addEventListener("DOMContentLoaded", function () {
 var form = document.querySelector("form");   // Obtener el elemento del formulario

 
 form.addEventListener("submit", function (event) {// Agregar un event listener para el evento de envío del formulario


//obtiene los valores de los campos del formulario
        
 var nombre = document.getElementById("nombre").value;
        var email = document.getElementById("email").value;
        var mensaje = document.getElementById("mensaje").value;

        
 if (nombre && email && mensaje ) {
    if(nombre === "daniela")   {
alert("Gracias Daniela por las clases y la correccion !!! " );     
    }else {
        alert("Formulario enviado con éxito. ¡Gracias, " + nombre + "!");
    }

        } else {
            
alert("Por favor, complete todos los campos del formulario.");
        }
    });
});

        
   






