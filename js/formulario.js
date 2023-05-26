function guardarPersona(event) {
    event.preventDefault(); 
    let formulario = document.getElementById('my-form');
    let nombre = formulario.elements ['nombre'].value;
    let apellido = formulario.elements ['apellido'].value;   
    let email = formulario.elements ['email'].value;
    
    if(nombre.length < 3)
      alert('Ingrese un nombre valido, debe contener a partir de tres caracteres');

    if(!nombre || !apellido || !email)
      alert('Complete los campos de nombre, apellido y email');
  
  }