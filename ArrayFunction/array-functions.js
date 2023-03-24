var a = [
    {
        name: "ted"
    },
    {
        name: "kevin"
    },
    {
        name: "mia"
    },
];
var b = a.map(function (item) { return item.name; });
b.forEach(function (bs) {
    console.log("My name is ".concat(bs));
});
