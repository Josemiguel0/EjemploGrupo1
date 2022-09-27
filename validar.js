    
function validar(){   
    var nombredeusuario=document.getElementById("textusuario").value;
    var ingresecontraseña=document.getElementById("textpass").value;


        if (nombredeusuario=="ined" && ingresecontraseña=="123456") 
        {
             alert("bienvenido")
        window.open("https://www.youtube.com/");
    }

  else {
     alert("Ingrese su Usuario y Contraseña Correctos");  
     window.open("index.html");
    }
    
}
