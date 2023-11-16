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
    
//redirige a tiktok
    window.location.href = 'http://www.tiktok.com/@fpick1985';
}