type numberOrStr = number | string;

function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: numberOrStr, b: numberOrStr): numberOrStr {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}
