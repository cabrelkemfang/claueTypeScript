class Root { 
   name:string; 
   disp():string{
       return "hello "+this.name
   }
} 

class Child extends Root {} 
class Leaf extends Child {} 

var obj = new Leaf(); 
obj.name ="mary" 
console.log(obj.disp())