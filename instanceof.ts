class Person{ } 
class Human extends Person{}
var obj = new Person() 
var isPerson = obj instanceof Human; 
console.log(" obj is an instance of Human " + isPerson);