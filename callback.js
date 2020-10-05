
//Creando una función con 2 parámetros
//Valor= primer parámetro=> x,y,1,2,3,"mensaje"

const { Console } = require("console");

//callback= segundo parámetro =>función
var fn_iniciar= function(valor, callback){
    callback(valor);
}

fn_iniciar("hugo",function(valor2){
    console.log(valor2 + " Torrico" );
})


var fn_Circunferencia= function (valor, callback)
{
    callback(valor);
}

fn_Circunferencia(5,function(radio)
{
    console.log("Area");
    console.log(Math.PI*radio*radio);
}
);

fn_Circunferencia(5,function(radio)
{
    console.log("Logitud");
    console.log(Math.PI*radio*2);
}
);


