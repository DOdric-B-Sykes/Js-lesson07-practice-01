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