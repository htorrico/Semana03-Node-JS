var Cat= function(){}

    Cat.prototype={
        legs:4,
        head:2,
        ears:2,
        sayHello: function(){
            console.log('meow');
        },
        Run: function(){
            console.log('gato está corriendo');
        }
    }
module.exports =Cat;        
