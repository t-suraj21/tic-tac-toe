let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#rset");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-cont");
let msg = document.querySelector("#msg");
let turnO=true; //player X and player Y
const winpatterns = [ 
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
];
const resetgame=()=>{
    turnO=true;
    enableBoxes();
    msgCont.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        
        checkWinner();
    })
});
  const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
  }
  const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
  }
 const showWinner = (winner)=>{
   
    msg.innerText='Congratulations , Winner is ${winner}';
    msgcontainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner=()=>{
    for( let pattern of winpatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
    
        if(pos1!="" && pos2!="" && pos3!=""){
           if(pos1==pos2 &&pos2==pos3){
            console.log("Winnner!",pos1);

            showWinner(pos1);
        }
}
}
};
newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
