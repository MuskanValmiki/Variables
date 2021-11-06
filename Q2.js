//escape sequences in strings-
var str = "i am staying in the\"banglore campus\"";
console.log(str);

var str1 = 'i am staying in the "sarjapur campus"';
console.log(str1);

var str2 = "i am staying in the 'pune campus'";
console.log(str2);

var myStr = ""; 
myStr = "I am a \"double quoted\" string inside\"double quotes\".";
console.log(myStr);


var myStr; // Change this line
myStr='FirstLine\n';
console.log(myStr);
console.log('\tSecondLine');
console.log('ThirdLine');

var myStr1;
myStr1 = 'FirstLine\n\t\\SecondLine\nThirdLine';
console.log(myStr1);

var myStr = "Jello World";
myStr[0] = "H";
myStr = "Hello World";
console.log(myStr);