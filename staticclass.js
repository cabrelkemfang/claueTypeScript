var StaticMem = /** @class */ (function () {
    function StaticMem() {
    }
    StaticMem.disp = function () {
        console.log("The value of num is " + StaticMem.num);
    };
    StaticMem.num = 0;
    return StaticMem;
}());
StaticMem.num; // initialize the static variable
StaticMem.disp();
StaticMem.num;
StaticMem.disp();
StaticMem.num;
StaticMem.disp();
// initialize the static variable 
StaticMem.disp();
// initialize the static variable 
StaticMem.disp();
