const decreaseBtn = document.getElementById("decButton");
const resetBtn = document.getElementById("reset");
const inceaseBtn = document.getElementById("incButton");
const countlabel = document.getElementById("countlabel");
let count = 0;

inceaseBtn.onclick = function(){
    count++;
    countlabel.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    countlabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}