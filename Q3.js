//type coercion-
// Q1 type coercion-
var name = "navgurukul";
var num = 29;
var result = name + num;
console.log(result);
 
//Q2 type coercion-
var measure = "height";
var val = 16.5;
var result = measure + val;
console.log(result);

//Q3 type coercion-
console.log(true + false);

// object destruturing-
var silverScreenDetails={name:"Chiranjeevi",realTag:"super star"}
var realLifeDetails={realName:"Konidela siva prasad",oldTag:"Mega star"}
var allActors={...silverScreenDetails,...realLifeDetails}
console.log(allActors);

var silverScreenDetails={name:"Chiranjeevi",tag:"super star"}
var realLifeDetails={realName:"Konidela siva prasad",tag:"Mega star"}
var allActors={...silverScreenDetails,...realLifeDetails}
console.log(allActors);