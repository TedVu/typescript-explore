const button = document.getElementById("btn");

function clickHandler(message: string) {
  console.log("Clicked");
}

const clickHandler2 = (message: string) => {
  console.log(`Click handler 2 ${message}`);
};

button?.addEventListener("click", () => {});
