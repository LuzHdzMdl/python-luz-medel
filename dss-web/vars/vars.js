var nombre = "Luz"
var email = "luzhernandezmedel@gmail.com"
var edad = 21

function getNombre(){
    console.log(nombre);
	//acceso al DOM
    var myNameElement = document.getElementById("nombre");
    myNameElement.innerHTML = nombre;
}

function getEmail(){
    console.log(email);
	//acceso al dom
    var myEmailElement = document.getElementById("email");
    myEmailElement.innerHTML='<H3>'+ email +'</H3>'
}

function getEdad(){
    console.log(edad);
    var myEdadElement = document.getElementById("edad");
    myEdadElement.innerHTML = '<h1>' + edad + '</h1>';
    myEdadElement.style.color = "#FF0000";
}
