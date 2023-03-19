// ver 1 using forEach function
const add = (str: string, ...numbers: number[]) => {
  let result = 0;
  numbers.forEach((number) => {
    result += number;
  });
  console.log(`I'm adding for ${str} and the result is ${result}`);
};

// ver 2 using reduce function
const add2 = (str: string, ...numbers: number[]) => {
  const result = numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);

  console.log(`I'm adding for ${str} and the result is ${result}`);
};

add("Ted Vu", 1, 2, 3, 4, 5);
add2("Ted Vu", 1, 2, 3, 4, 5);
