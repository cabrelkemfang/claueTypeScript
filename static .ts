class StaticMem {  
   static num:number; 
   
   static disp():void { 
      console.log("The value of num is"+ StaticMem.num) 
   } 
} 

StaticMem.num = 12     // initialize the static variable 
StaticMem.disp()
/*StaticMem.num = 15    // initialize the static variable 
StaticMem.disp()
StaticMem.num = 1  // initialize the static variable 
StaticMem.disp()*/