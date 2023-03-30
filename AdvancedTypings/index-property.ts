// index property says that we can add as many property we want to this interface and the property type is number and the value type is boolean
type IndexType = {
  [key: number]: number;
};

const a: IndexType = {
  1: 45,
  2: 1,
};

console.log(a[1]);
