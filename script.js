let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#reset-btn")
let newGamebtn = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turn0 = true;//playerX , player0

const winPatterns = [//2D arrays arrays of arrays
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

    const resetgame =()=>{
        turn0 = true
        enabledBoxes();
        msgContainer.classList.add("hide")
    }

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0){//playerO
            box.innerText ="O"
            box.sty
            turn0=false;
        }else {//player1
            box.innerText ="X"
            turn0 = true;
        }
        box.disabled =true;
        checkWinner()
    })

})  
const enabledBoxes =()=>{
    for( let box of boxes){
        box.disabled =false;
        box.innerText=""
    }
}
        const disabledBoxes =()=>{
            for( let box of boxes){
                box.disabled =true;
            }
        }

    const showWinner = (winner)=> {
        msg.innerText =`Congatulations, Winner is ${winner}`
        msgContainer.classList.remove("hide");
        disabledBoxes()
    }
   


const checkWinner =()=>{
    for( let pattern of winPatterns){
        let pos1Value = boxes[pattern[0]].innerText
        let pos2Value = boxes[pattern[1]].innerText
        let pos3Value = boxes[pattern[2]].innerText

        if(pos1Value != "" && pos2Value != "" && pos3Value != "")
            if(pos1Value === pos2Value && pos2Value === pos3Value){
                console.log("winner");
            showWinner(pos1Value);}

    }
}

newGamebtn.addEventListener("click" , resetgame)
resetbtn.addEventListener("click" , resetgame)