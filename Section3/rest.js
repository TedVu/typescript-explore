var add = function (str) {
    var numbers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numbers[_i - 1] = arguments[_i];
    }
    var result = 0;
    numbers.forEach(function (number) {
        result += number;
    });
    console.log("I'm adding for ".concat(str, " and the result is ").concat(result));
};
var add2 = function (str) {
    var numbers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numbers[_i - 1] = arguments[_i];
    }
    var result = numbers.reduce(function (curResult, curValue) {
        return curResult + curValue;
    }, 0);
    console.log("I'm adding for ".concat(str, " and the result is ").concat(result));
};
add("Ted Vu", 1, 2, 3, 4, 5);
add2("Ted Vu", 1, 2, 3, 4, 5);
