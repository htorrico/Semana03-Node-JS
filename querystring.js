var querystring = require('querystring');
var q = querystring.parse('year=2017&month=february');
//q.year=2017
//q.month=february

// console.log(q.year);

// var stringify= querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: 'x' });
// console.log(stringify);

var parse=querystring.parse('foo=bar&baz=qux&baz=quux&corge=tecsup');
console.log(parse);

