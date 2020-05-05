
/// There are only two types in Javascript(Nodejs.). String and Number.
/// Note that you don`t have to use semicolon at the end of line.

///// Numbers
console.log(1+1);
console.log(3-1);
console.log(4*3);
console.log(1/3);

console.log(3**3); // Power of number can be calculated with **.
console.log(28 % 3);
console.log("How to concatnate string and number ? : Just use + " + 28 % 3 + " gogo go ~ ");

///// Strings.
console.log( '1' + '1' ); // Should be 11.

// Number of len
console.log('Fucking there is no meaning for this letters.'.length);


// varaibles
var f = 1+2;
var f = "333";


var anyway = 'FUCKING';

var sentence = 'You are little ' + anyway + ' son of a bitch\n\
\You crappy ' + anyway + ' asshole.\n SHIT.';

console.log(sentence);

// Template literals : Using `` not ''
var sentence = `You are little ${anyway} son of a bitch
You crappy ${anyway} asshole.\n ${"SHIT"}.`;

console.log(sentence);


////File Input
var fs = require('fs');

fs.readFile('sample.txt', 'utf-8', function(err, data){
    if (err)
        throw err;
    else
        console.log(data);
});



//// Console input
var args = process.argv;
console.log(args[2]);
if(args[2] =='1'){
    console.log('C1');
} else {
    console.log('C2');
}
console.log('D');
