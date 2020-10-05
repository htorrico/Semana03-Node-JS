function saludar(cb)
{
    var mensaje="Hola mundo";
    cb(mensaje);
}

saludar(function(mensaje2){
    console.log(mensaje2);
});