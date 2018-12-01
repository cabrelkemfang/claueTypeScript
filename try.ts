interface Person { 
   age:number 
} 

interface Musician extends Person { 
   instrument:string 
} 

var drummer:Musician={age:29,instrument:"TRUMP"}; 
console.log("value 1: "+drummer.age+" value 2: "+this.instrument)
drummer.age = 27 
drummer.instrument = "Drums" 
console.log("Age:  "+drummer.age) 
console.log("Instrument:  "+drummer.instrument)