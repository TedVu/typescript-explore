const input1 = document.getElementById("num1")! as HTMLInputElement;

const sum = (a: number, b: number): number => {
  return a + b;
};

sum(input1, input1);
