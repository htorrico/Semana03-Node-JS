function dividir(x,y,cb){
if (y===0) return cb(new Error('No se puede dividir entre 0'));
cb(null,x/y);
}

dividir(10,0,function(error, resultado){
if  (error) throw error;
console.log(resultado);
})