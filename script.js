function generatearray() {
    for (var i = 0; i < slider.value; i++) {
        var value = Math.ceil(Math.random() * 100);
        var array_ele = document.createElement("div");
        array_ele.classList.add("block");
        array_ele.style.height = `${(value * 3) + 15}px`;
        var array_ele_label = document.createElement("label");
        array_ele_label.classList.add("block_id");
        array_ele_label.innerText = value;
        array_ele.appendChild(array_ele_label);
        container.appendChild(array_ele);
    }
}

//Bubble Sort
async function BubbleSort() {
    var blocks = document.querySelectorAll(".block");
    for (var i = 0; i < blocks.length; i += 1) {
        for (var j = 0; j < blocks.length - i - 1; j += 1) {
            blocks[j].style.backgroundColor = "#FF4949";
            blocks[j + 1].style.backgroundColor = "#FF4949";
            await new Promise((resolve) =>setTimeout(() => {resolve();}, delay));
            if (Number(blocks[j + 1].childNodes[0].innerHTML) < Number(blocks[j].childNodes[0].innerHTML)) {
                var place_h = blocks[j + 1].childNodes[0].innerHTML;
                blocks[j + 1].style.height = `${(Number(blocks[j].childNodes[0].innerHTML) * 3) + 15}px`;
                blocks[j + 1].childNodes[0].innerHTML = blocks[j].childNodes[0].innerHTML;
    
                blocks[j].style.height = `${(Number(place_h) * 3) + 15}px`;
                blocks[j].childNodes[0].innerHTML = place_h;
                blocks[j].style.backgroundColor = "rgb(0, 128, 255)";
                blocks[j + 1].style.backgroundColor = "rgb(0, 128, 255)";
            }
            blocks[j].style.backgroundColor = "rgb(0, 128, 255)";
        }
    }
    for (var i = 0; i < blocks.length; i++){
        await new Promise((resolve) =>setTimeout(() => {resolve();}, delay / 2));
        blocks[i].style.backgroundColor = "#13CE66";
    }
    return;
}

//selection sort
async function SelectionSort(){
    var blocks = document.querySelectorAll(".block");
    for (var i = 0; i < blocks.length; i++) {
        var min = i
        for (var j = i + 1; j < blocks.length; j++) {
            blocks[j].style.backgroundColor = "#FF4949";
            blocks[min].style.backgroundColor = "#FF4949";
            await new Promise((resolve) =>setTimeout(() => {resolve();}, delay));
            if (Number(blocks[j].childNodes[0].innerHTML) < Number(blocks[min].childNodes[0].innerHTML)) {
                blocks[min].style.backgroundColor = "rgb(0, 128, 255)";
                min = j;
            }
            blocks[j].style.backgroundColor = "rgb(0, 128, 255)";
        }
        if (i != min){
            var place_h = blocks[i].childNodes[0].innerHTML;
            blocks[i].style.height = `${(Number(blocks[min].childNodes[0].innerHTML) * 3) + 15}px`;
            blocks[i].childNodes[0].innerHTML = blocks[min].childNodes[0].innerHTML;

            blocks[min].style.height = `${(Number(place_h) * 3) + 15}px`;
            blocks[min].childNodes[0].innerHTML = place_h;
            blocks[min].style.backgroundColor = "rgb(0, 128, 255)";
        }
    }
    for (var i = 0; i < blocks.length; i++){
        await new Promise((resolve) =>setTimeout(() => {resolve();}, delay / 2));
        blocks[i].style.backgroundColor = "#13CE66";
    }
    return;
}
// Insertion Sort
async function InsertionSort(){
    var blocks = document.querySelectorAll(".block");
    for (var i = 1; i < blocks.length; i++){
        var x = blocks[i].childNodes[0].innerHTML;
        blocks[i].style.backgroundColor = "#FF4949";
        var j = i - 1;
        while (j >= 0 && Number(blocks[j].childNodes[0].innerHTML) > Number(x)){
            blocks[j].style.backgroundColor = "#FF4949";
            await new Promise((resolve) =>setTimeout(() => {resolve();}, delay));
            blocks[j + 1].style.height = `${(Number(blocks[j].childNodes[0].innerHTML) * 3) + 15}px`;
            blocks[j + 1].childNodes[0].innerHTML = blocks[j].childNodes[0].innerHTML;
            blocks[j].style.backgroundColor ="rgb(0, 128, 255)";
            j = j - 1;
        }
        blocks[j + 1].style.height = `${(x * 3) + 15}px`;
        blocks[j + 1].childNodes[0].innerHTML = x;
    }
    blocks[blocks.length - 1].style.backgroundColor ="rgb(0, 128, 255)";
    for (var i = 0; i < blocks.length; i++){
        await new Promise((resolve) =>setTimeout(() => {resolve();}, delay / 2));
        blocks[i].style.backgroundColor = "#13CE66";
    }
    return;
}

//Coutn Sort
const findMaximum = arr => arr.reduce((acc, val) => val > acc ? val: acc, Number.MIN_VALUE);
async function CountSort(){
    var blocks = document.querySelectorAll(".block");
    var arr = [];
    for (var i = 0; i < blocks.length; i++){
        arr.push(Number(blocks[i].childNodes[0].innerHTML));
    }
    // find max value
    const max = findMaximum(arr);
    const counts = new Array(max + 1);
    counts.fill(0);
    arr.forEach(value => counts[value]++);
    const res = [];
    let resultIndex = 0;
    counts.forEach((count, index) => {
       for (let i = 0; i < count; i++) {
          res[resultIndex] = index;
          resultIndex++;
       };
    });
    for (var i = 0; i < blocks.length; i++){
        var y;
        for (var j = i; j < blocks.length; j++){
            if (blocks[j].childNodes[0].innerHTML == res[i]){
                y = j;
                break;
            }
        }
        blocks[i].style.backgroundColor = "#FF4949";
        blocks[y].style.backgroundColor = "#FF4949";
        
        await new Promise((resolve) =>setTimeout(() => {resolve();}, delay));
        blocks[i].style.height = `${(res[i] * 3) + 15}px`;
        blocks[i].childNodes[0].innerHTML = res[i];
        blocks[y].style.backgroundColor = "rgb(0, 128, 255)";
        blocks[i].style.backgroundColor = "rgb(0, 128, 255)";
        await new Promise((resolve) =>setTimeout(() => {resolve();}, delay));
    }
    
    for (var i = 0; i < blocks.length; i++){
        await new Promise((resolve) =>setTimeout(() => {resolve();}, delay / 2));
        blocks[i].style.backgroundColor = "#13CE66";
    }

}

async function ShellSort(){
    var blocks = document.querySelectorAll(".block");
    let increment = blocks.length / 2;
    while (increment > 0){
        for (var i = increment; i < blocks.length; i++){
            var j = i;
            var temp = blocks[i].childNodes[0].innerHTML;
            while (j >= increment && Number(blocks[j - increment].childNodes[0].innerHTML) > Number(temp)){
                blocks[j].style.backgroundColor = "#FF4949";
                blocks[j - increment].style.backgroundColor = "#FF4949";
                await new Promise((resolve) =>setTimeout(() => {resolve();}, delay / 2));
                blocks[j].style.height = `${(Number(blocks[j - increment].childNodes[0].innerHTML) * 3) + 15}px`;
                blocks[j].childNodes[0].innerHTML = blocks[j - increment].childNodes[0].innerHTML;
                blocks[j].style.backgroundColor = "rgb(0, 128, 255)";
                blocks[j - increment].style.backgroundColor = "rgb(0, 128, 255)";
                j = j - increment;
            }
            blocks[j].style.backgroundColor = "#FF4949";
            await new Promise((resolve) =>setTimeout(() => {resolve();}, delay / 2));
            blocks[j].style.height = `${(Number(temp) * 3) + 15}px`;
            blocks[j].childNodes[0].innerHTML = temp;
            blocks[j].style.backgroundColor = "rgb(0, 128, 255)";
        }
        if (increment == 2){
            increment = 1;
        }
        else{
            increment = parseInt(increment * 5 / 11);
        }
    }
    for (var i = 0; i < blocks.length; i++){
        await new Promise((resolve) =>setTimeout(() => {resolve();}, delay / 2));
        blocks[i].style.backgroundColor = "#13CE66";
    }
}

async function PigeonHoleSort(){
    var blocks = document.querySelectorAll(".block");
    var n = blocks.length;
    let min = blocks[0];
    let max = blocks[0];
    let range, i, j, index;
   
    for(let a = 0; a < n; a++){
        if(Number(blocks[a].childNodes[0].innerHTML) > Number(max.childNodes[0].innerHTML))
            max = blocks[a];
        if((Number(blocks[a].childNodes[0].innerHTML)) < Number(min.childNodes[0].innerHTML))
            min = blocks[a];
    }
   
    range = Number(max.childNodes[0].innerHTML) - Number(min.childNodes[0].innerHTML) + 1;
    let phole = [];
    for(i = 0; i < n; i++)
        phole[i] = 0;
    for(i = 0; i < n; i++)
        phole[Number(blocks[i].childNodes[0].innerHTM) - Number(min.childNodes[0].innerHTML)]++;

    index = 0;
    for(j = 0; j < range; j++)
        while(phole[j] --> 0){
            await new Promise((resolve) =>setTimeout(() => {resolve();}, delay));
            //blocks[index++] = j + Number(min.childNodes[0].innerHTML);
            blocks[index++].style.height = `${(j + Number(min.childNodes[0].innerHTML) * 3) + 15}px`;
            blocks[index++].childNodes[0].innerHTML =  + Number(min.childNodes[0].innerHTML);

        }
    console.log(blocks);
    return;

}



function clearcontent() {
    var blocks = document.querySelectorAll(".block");
    for (let i = 0; i < blocks.length; i++) {
        blocks[i].remove();
    }
}

// global functions
var delay = 100;
var bubbleSort = document.getElementById("bubbleSort");
var selectionSort = document.getElementById("selectionSort");
var insertionSort = document.getElementById("insertionSort");
var countSort = document.getElementById("countSort");
var shellSort = document.getElementById("shellSort");

var slider = document.getElementById("range");
var value = document.getElementById("valueFront");
var container = document.getElementById("array");
value.innerHTML = slider.value;
generatearray();

slider.oninput = function() {
    value.innerHTML = this.value;
    clearcontent();
    generatearray();
}
shellSort.onclick = function(){
    clearcontent();
    generatearray();
    ShellSort();
}
countSort.onclick = function(){
    clearcontent();
    generatearray();
    CountSort();
}
insertionSort.onclick = function(){
    clearcontent();
    generatearray();
    InsertionSort();
}
selectionSort.onclick = function(){
    clearcontent();
    generatearray();
    SelectionSort();
}
bubbleSort.onclick = function(){ 
    clearcontent();
    generatearray();
    BubbleSort();  
}