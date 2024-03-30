
// RUN THIS CODE IN YOUR BROWSER'S CONSOLE



console.log("--------->Rock Paper Seasor<-----------")
console.log("'r' for Rock");
console.log("'p' for Paper");
console.log("'s' for Seasor");
let c = 8;
let cpu = Math.floor(Math.random() * 3);
let gameSet = ['r', 'p', 's'];
cpu = gameSet[cpu];
let user;

while (c > 0) {
    console.log("                     ");
    console.log("You have " + c + " chances");
    c--;
    user = prompt("Enter your choice : >");
    if ((user === "r" && cpu === "r") || (user === "p" && cpu === "p") || (user === "s" && cpu === "s")) {
        console.log("Game tied");
    }
    if (user === "r" && cpu === "s") {
        console.log("User won!!");
        break;
    }
    if (user === "r" && cpu === "p") {
        console.log("CPU won!!");
        break;
    }
    if (user === "p" && cpu === "s") {
        console.log("Cpu won!!");
        break;
    }
    if (user === "p" && cpu === "r") {
        console.log("User won!!");
        break;
    }
    if (user === "s" && cpu === "r") {
        console.log("CPU won!!");
        break;
    }
    if (user === "s" && cpu === "p") {
        console.log("User won!!");
        break;
    }
}
console.log("CPU: " + cpu);
console.log("User: " + user);

