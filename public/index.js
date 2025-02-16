const headtext = document.querySelector("#head");
const palyerBord = document.querySelector("#player");
const table = document.querySelector("table");
const cells = document.querySelectorAll("td");


console.log("Number of cells found:", cells.length);

let currentPlayer = "❌";

cells.forEach((cell, index) => {
    console.log(`Adding listener to cell ${index}`);
    cell.addEventListener("click", () => {
        console.log(`Cell ${index} clicked`);
        if (!cell.textContent) {
            cell.textContent = currentPlayer;
            currentPlayer = currentPlayer === "❌" ? "⭕" : "❌";
            palyerBord.textContent = `Current Player: ${currentPlayer}`;
        }
    });
});


