function disp() {
    return new Array("Mary", "Tom", "Jack", "Jill");
}
var nums = disp();
for (var i in nums) {
    console.log(nums[i]);
}
