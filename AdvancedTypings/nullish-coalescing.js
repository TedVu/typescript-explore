var nullish = null;
var val = nullish !== null && nullish !== void 0 ? nullish : "default";
console.log("Value is ".concat(val));
