var box1 = document.querySelector(".box-1");
var box2 = document.querySelector(".box-2");
var box3 = document.querySelector(".box-3");

document.addEventListener("keydown", function(e){
    var key = e.key;

    if (e.key === "1"){
        console.log(box1.innerText = "🔥");
    } else if (e.key === "2"){
        console.log(box2.innerText = "💣");
    } else if (e.key === "3"){
        console.log(box3.innerText = "🤯");
    }

});

var clearButton = document.querySelector("button");

clearButton.addEventListener("click", function (){
    if (box1.innerText = "🔥"){
        console.log(box1.innerText = "1");
    } if (box2.innerText = "💣"){
        console.log(box2.innerText = "2");
    } if ( box3.innerText = "🤯"){
        console.log(box3.innerText = "3");
    }

});
