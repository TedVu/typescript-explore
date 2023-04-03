var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// type constraint in action with extends keyword
function merge(objA, objB) {
    return __assign(__assign({}, objA), objB);
}
var objC = merge({ name: "ted" }, { age: 4 });
console.log(objC.age);
function countAndDescribe(element) {
    var descriptionText = "Got no value";
    if (element.length === 1) {
        console.log("Got 1 element");
    }
    else if (element.length > 1) {
        console.log("Got " + element.length + " elements");
    }
    return [element, descriptionText];
}
console.log(countAndDescribe("Ted Vu"));
function extractAndCover(m, k) {
    return m[k];
}
console.log(extractAndCover({ name: "ted" }, "name"));
