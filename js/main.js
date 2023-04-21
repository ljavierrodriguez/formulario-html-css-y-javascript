let form = document.querySelector('#contactForm');

form.addEventListener('submit', validarFormulario);

function validarFormulario(evento){
    evento.preventDefault();

    let nombre = document.forms['contactForm']['nombre'].value;
    let email = document.forms['contactForm']['email'].value;
    let mensaje = document.forms['contactForm']['mensaje'].value;

    let soloLetras = /^[a-zA-Z\s]+$/;
    let emailGmail = /\S+@gmail.+\S/;
    let emailHotmail = /\S+@hotmail.+\S/;

    let valido = true;

    if(nombre === ''){
        document.getElementById('nombre').classList.add('error');
        document.querySelector('.form input[type="text"].error + small').innerHTML = "Campo Obligatorio";
        valido = false;
    } else if (!soloLetras.test(nombre)){
        document.getElementById('nombre').classList.add('error');
        document.querySelector('.form input[type="text"].error + small').innerHTML = "Campo debe contener solo letras";
        valido = false;
    } else {
        document.getElementById('nombre').classList.remove('error');
    }

    if (email === ''){
        document.getElementById('email').classList.add('error');
        document.querySelector('.form input[type="email"].error + small').innerHTML = "Campo Obligatorio";
        valido = false;
    } else if (!(emailGmail.test(email) || emailHotmail.test(email))){
        document.getElementById('email').classList.add('error');
        document.querySelector('.form input[type="email"].error + small').innerHTML = "Por favor indique un correo de Gmail o Hotmail";
        valido = false;
    } else {
        document.getElementById('email').classList.remove('error');
    }

    if(mensaje === ''){
        document.getElementById('mensaje').classList.add('error')
        document.querySelector('.form textarea.error + small').innerHTML = "Campo Obligatorio";
        valido = false;
    }else {
        document.getElementById('mensaje').classList.remove('error');
    }

    if(valido){
        form.submit();
    }
}