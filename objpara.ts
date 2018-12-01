var person = { 
    firstname:"Tom", 
    lastname:"Hanks" 
 }; 
 console.log(person) 
 var invokeperson = function(obj: { firstname:string, lastname :string }) { 
    console.log("first name :"+obj.firstname) 
    console.log("last name :"+obj.lastname) 
 } 
 invokeperson(person)