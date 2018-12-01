interface namelist { 
   [index:number]:string 
} 

var list2:namelist = ["John","hey","Bran"] 
list2[2]="Claude"
console.log(list2)

/*interface ages { 
   [index:string]:number 
} 

var agelist:ages; 
agelist["John"] = 15  
agelist["Bran"] = 5   
console.log(agelist)*/