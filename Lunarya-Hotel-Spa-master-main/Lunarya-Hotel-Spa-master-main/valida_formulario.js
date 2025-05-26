document.getElementById('nombre').addEventListener('input', () => limpiarerror ('nombreError'));
document.getElementById('nombre').addEventListener('blur',validarnombre);


//limpiar error//
function limpiarerror(iderror){
    const error = document.getElementById(iderror);
    if(error){
        error.textContent = '';
    }
}

function validarnombre(){
    const nombre = document.getElementById('nombre').value.trim();
    const error_texto = document.getElementById('nombreError');

    if(nombre.length < 3 || nombre.length > 30){
        error_texto.textContent = 'Minimo 3 caracteres y maximo 30 caracteres.';
    }else {
        error_texto.textContent ='';
    }
}

const form = document.getElementById('formulario_contacto');
const boton = form.querySelector('button[type="submit"]');
boton.addEventListener('click', function(e){
    e.preventDefault();
    validarnombre();

});