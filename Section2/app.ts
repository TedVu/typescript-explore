const button = document.getElementById("btn");

function clickHandler(message: string) {
  console.log("Clicked");
}

const clickHandler2 = (message: string) => {
  console.log(`Click handler 2 ${message}`);
};

button?.addEventListener("click", () => {});

function generateError(message: string, errorCode: number): never {
  throw { message: message, errorCode: errorCode };
}

const a: [number, string] = [1, "ted"];

const b: null = null;

let c: never;
let d: any;
