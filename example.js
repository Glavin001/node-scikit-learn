var sklearn = require('./index');

var getAttr = sklearn.getAttributes;

var datasets = sklearn.import('datasets');

console.log( datasets.__dict__.toString() );

var iris = datasets.load_iris();
var digits = datasets.load_digits();

var d = digits.data.toString();

console.log( digits.data.toString() );
console.log( digits.target.toString() );


// getAttr(digits);

//console.log( JSON.parse(d) );

