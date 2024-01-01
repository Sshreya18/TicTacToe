let boxes= document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let turn0= true; //playerX,player0
let click_count=0;
let newgame=document.querySelector("#newg");
let msgcont=document.querySelector(".msgc");
let msg=document.querySelector("#msg");
const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,6],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetg=() =>{
    turn0=true;
    enable();
    msgcont.classList.add("hide");
    click_count=0;

}
boxes.forEach((box)=> {
    box.addEventListener("click",() =>{
        if(turn0){
            box.innerText="O";
            turn0=false;
        } else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        click_count++;
        check();
    })
})
const disable=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const show = (winner)=>{
    msg.innerText='CONGRATULATION THE WINNER IS PLAYER: '+winner;
    msgcont.classList.remove("hide");
    disable();
}
const check =()=> {
    for (let i of win){
        let pos1= boxes[i[0]].innerText;
        let pos2= boxes[i[1]].innerText;
        let pos3= boxes[i[2]].innerText;

        if(pos1!="" && pos2!="" &&pos3!=""){
            if (pos1==pos2 && pos2==pos3){
                console.log("winner",pos1);
                show(pos1);
            }
        }       
    }
    if (click_count==9){
        msg.innerText="IT'S A DRAW";
        msgcont.classList.remove("hide");
    }
};
newg.addEventListener("click",resetg);
reset.addEventListener("click",resetg);

