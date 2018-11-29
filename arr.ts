function disp():string[] { 
   return new Array("Mary","Tom","Jack","Jill") 
} 
 
var nums:string[] = disp() 
for(var t in nums) { 
   console.log(nums[t]) 
}