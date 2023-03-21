// index property says that we can add as many property we want to this interface and the property type is number and the value type is boolean
interface ErrorContainer {
  [prop: number]: boolean;
}

const errorBag: ErrorContainer = {
  1: true,
  2: false,
};

console.log(errorBag[1]);
