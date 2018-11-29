var person = {
   firstName:"Tom", 
   lastName:"Hanks", 
   sayHello:function(name:string) {  }  //Type template 
} 
person.sayHello = function(name) {  
   console.log("hello "+person.firstName + name)
}  
person.sayHello(person.lastName)