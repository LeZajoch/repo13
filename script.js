

function selectDifficulty(count){
    let arr = [count];
}
let arr = [0,1,2];
let r = Math.floor((Math.random()) *256);
let g = Math.floor((Math.random()) *256);
let b = Math.floor((Math.random()) *256);

document.getElementById("colorName").innerHTML ="("+r+","+g+","+b+")";

let index = Math.floor((Math.random())*3);

document.getElementById(index).style.backgroundColor = "rgb("+r+","+g+","+b+")";

arr.splice(index, 1);

let r1 = Math.floor((Math.random()) *256);
let g1 = Math.floor((Math.random()) *256);
let b1 = Math.floor((Math.random()) *256);
document.getElementById(arr[0]).style.backgroundColor = "rgb("+r1+","+g1+","+b1+")";

let r2 = Math.floor((Math.random()) *256);
let g2 = Math.floor((Math.random()) *256);
let b2 = Math.floor((Math.random()) *256);
document.getElementById(arr[1]).style.backgroundColor = "rgb("+r2+","+g2+","+b2+")";


function guess(){
    if(document.activeElement.id==index){
        document.getElementById("colorName").innerHTML="CORRECT!!";
        document.getElementById("colorName").style.color="darkgreen";
    }
    else {
        document.getElementById("colorName").innerHTML="WRONG";
        document.getElementById("colorName").style.color="darkred";
    }
    document.getElementsByClassName("btn")[0].removeAttribute("onclick");
    document.getElementsByClassName("btn")[1].removeAttribute("onclick");
    document.getElementsByClassName("btn")[2].removeAttribute("onclick");
}
function replay(){
    window.location.reload();
}

