let input = document.getElementById("input");
let num = document.querySelectorAll(".num");
let clr = document.getElementById("clr");
let del = document.getElementById("del");
let equal = document.getElementById("equal");
let displayText = "";
input.disabled = true;

num.forEach((n)=>{
    n.addEventListener("click",()=>{
        displayText = displayText + n.textContent;
        display(); 
    })
})

clr.addEventListener("click",()=>{
    displayText = "";
    display();
})

del.addEventListener("click",()=>{
    displayText = displayText.substring(0,displayText.length-1);
    display();
})

function display(){
    input.value = displayText;
}

equal.addEventListener("click",()=>{
    if(displayText=="")
    {
    displayText = "Please enter the equation";
    display();
    }
    displayText = eval(displayText);
    display();
})




