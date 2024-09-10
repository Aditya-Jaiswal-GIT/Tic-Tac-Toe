let a = document.querySelector("#b1");
let b = document.querySelector("#b2");
let c = document.querySelector("#b3");
let d = document.querySelector("#b4");
let e = document.querySelector("#b5");
let f = document.querySelector("#b6");
let g = document.querySelector("#b7");
let h = document.querySelector("#b8");
let i = document.querySelector("#b9");
const boxes = [a,b,c,d,e,f,g,h,i];
let reset = document.querySelector("#reset");
turn0 = true;
const winning = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
boxes.forEach((box)=>{
         box.addEventListener("click",() =>{
            if(turn0)
            {
                box.innerText = "o";
                turn0=false;
            }
            else{
                box.innerText = "x";
                turn0 = true;
            }
            box.disabled = true;
         checkwinner();
         }) 
})
const checkwinner = () =>{
    for(let pattern of winning)
    {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 !=""&& pos2!=""&&pos3!="")
        {
            if(pos1==pos2&&pos2==pos3)
            {
                if(turn0==true)
                {
                    alert("Player2 is winner");
                }
               else{
                    alert("Player1 is winner");
                }
            }
        }
    }
}