// console.log("hellow");
// console.log("hellow");



// // window.alert("Hello Guys to our website!");

// let omar = 22;
// console.log(`you are ${omar} old`);
// console.log(`you are ${omar} old`);
// console.log(`you are ${omar} old`);

// let online = false;
// let fullname = "Omar Mohamed Ahmed";
// console.log(`omar ${online}`);
// document.getElementById("myH1").textContent = `you are ${fullname}`;

// // parenthesis , exp , mult div modulo , add sub

// let result = 12 % 5 + 8 / 2;
// console.log(result);

let username ;

document.getElementById(`submit`).onclick = function(){
    username = document.getElementById("text").value;
    document.getElementById("myH1").textContent = `Hello ${username}`;
}

