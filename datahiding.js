var Encapsulate = /** @class */ (function () {
    function Encapsulate() {
        this.str = "hello";
        this.str2 = "world";
    }
    return Encapsulate;
}());
var obj = new Encapsulate();
console.log(obj.str); //accessible 
console.log(obj.str2);
