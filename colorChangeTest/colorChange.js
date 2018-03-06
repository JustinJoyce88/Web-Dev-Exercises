var isPurple = false;
var button = document.querySelector("button").addEventListener("click", function colorChange() {
    // if(isPurple){
    //     document.body.style.background = "white";
    // }
    // else{
    //     document.body.style.background = "purple";
    // }
    // isPurple = !isPurple
    document.body.classList.toggle("bodyPurple");
});