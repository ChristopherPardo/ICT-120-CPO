/*window.onload=function(){
	if(CBClasic.checked || CBRev.checked){
		alert("test");
		GameBord.hidden = false;
		Choice.hidden = true;
		canv=document.getElementById("gc");
		ctx=canv.getContext("2d");
		document.addEventListener("keydown",keyPush);
		setInterval(game,1000/15);
	}
}*/
//window.onload=function(){

//TROUVER UN EVENT QUI FONCTIONNE POUR LE CHECKED DES TEXTBOX
	CBClasic.addEventListener("click",Load);
	CBRev.addEventListener("click",Load);
//}
function Load(){
if (CBClasic.checked) {
	mode = 1;
}
else if(CBRev.checked){
	mode = 2;
}
GameBord.hidden = false;
Choice.hidden = true;
canv=document.getElementById("gc");
ctx=canv.getContext("2d");
document.addEventListener("keydown",keyPush);
setInterval(game,1000/15);
}
  px=py=10;
  gs=tc=20;
  ax=ay=15;
  xv=yv=0;
  trail=[];
  tail= 20;
	function game(){
    sc.innerHTML = tail;
		px+=xv;
		py+=yv;
		if(px<0){
			px= tc-1;
		}
		if(px>tc-1){
			px= 0;
		}
		if(py<0){
			py= tc-1;
		}
		if(py>tc-1){
			py= 0;
		}
		ctx.fillStyle="black";
		ctx.fillRect(0,0,canv.width,canv.height);

		ctx.fillStyle="lime";
		for(var i=0;i<trail.length;i++){
			ctx.fillRect(trail[i].x*gs,trail[i].y*gs,gs-2,gs-2);
			if(trail[i].x ==px && trail[i].y==py){
				if (mode == 1) {
					tail = 5;
				}
				else if (mode == 2) {
					tail = 20;
				}
			}
		}
		trail.push({x:px,y:py});
		while(trail.length>tail){
			trail.shift();
		}

		if(ax == px && ay == py && tail != 0){
			if (mode == 1) {
				tail++;
			}
			else if (mode == 2) {
				tail--;
			}
				ax=Math.floor(Math.random()*tc);
				ay=Math.floor(Math.random()*tc);
			}

		ctx.fillStyle="cyan";
		ctx.fillRect(ax*gs,ay*gs,gs-2,gs-2);

    if(tail == 0){
      alert("Vous avez gagné");
    }

	}
	function keyPush(evt){
		switch(evt.keyCode){
		case 37:
			xv= -1; yv = 0;
			break
		case 38:
			xv= 0; yv = -1;
			break
		case 39:
			xv= 1; yv = 0;
			break
		case 40:
			xv= 0; yv = 1;
			break
		}
	}
