class PrinterClass { 
   doPrint():string {
       console.log("hello")
     return "doPrint() from Parent called…"
   } 
} 

class StringPrinter extends PrinterClass { 
   doPrint():string { 
      super.doPrint() 
     return "doPrint() is printing a string…"
   } 
} 

var obj = new StringPrinter() 
console.log(obj.doPrint())