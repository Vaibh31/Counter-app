let count=0;
const display=document.getElementById("count-display");
const increasebtn=document.getElementById("increase");
const decreasebtn=document.getElementById("decrease");
const resetbtn=document.getElementById("reset");
function updateDisplay(){
    display.textContent=count;
    if(count>0){
        display.style.color= "#16A34A";
    }else if(count<0){
        display.style.color="#dc2626";
    }else{
        display.style.color="#1E293B";
    }
}
increasebtn.addEventListener("click",()=>
{
    console.log("Value incremented");
    count++;
    updateDisplay();
});
decreasebtn.addEventListener("click",()=>
{
    console.log("Value decremented");
    count--;
    updateDisplay();
});
resetbtn.addEventListener("click",()=>
{
    console.log("Value reset");
    count=0;
    updateDisplay();
});
