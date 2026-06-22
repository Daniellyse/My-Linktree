/*JS colormask
3 stars that represent RGB
1 star for black&white text colors w(0,0,0)/b(255,255,255)
OnHoldDownLCLk number up
OnHoldDownLCLk number down
Display R: 0, G: 0, B: text: 0 [on Start @Bottom left footer]

Handling variables Button R1,R2,R3,R4, bkgR,nameR */
let num = 0;
function colorShift_R(){
    num = num + 1;
    document.getElementById("testClick").innerHTML = "holding for: "+num;
}