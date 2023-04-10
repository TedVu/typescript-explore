const input1 = document.getElementById("num1")! as HTMLInputElement;

const sum = (a: HTMLInputElement, b: number): number => {
  return a + b;
};

sum(input1, input1);
