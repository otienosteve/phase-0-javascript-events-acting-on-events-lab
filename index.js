
dodger=document.getElementById('dodger');
dodger.style.right="180px"
function moveDodgerLeft(evt){
    
        const leftNumbers = dodger.style.left.replace("px", "");
        const left = parseInt(leftNumbers, 10);
        if (left > 0) {
            dodger.style.left = `${left - 1}px`;
        }
}

function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left < 360) {
        dodger.style.left = `${left + 1}px`;
    } 
}


document.addEventListener('keydown',(event)=>{
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();
    }
    if (event.key === "ArrowRight") {
        moveDodgerRight();
    }
})