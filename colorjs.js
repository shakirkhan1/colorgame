var numsquare=6,count=0,countlimit=3;
var colors=generaterandomcolor(numsquare);

var colordisplay=document.querySelector("#colordisplay");
var pickedcolor=pickrandomcolor();
colordisplay.textContent =pickedcolor;

var square=document.querySelectorAll(".square");
var messageDisplay=document.querySelector("#message");
var idh1=document.querySelector("#idh1");
var resetButton=document.querySelector("#reset");

var modebuttons=document.querySelectorAll(".mode");
var rules=document.querySelector(".rules");

rules.addEventListener("click",function(){
	openNav();

});

function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
// window.onload=happycode() ;

// function happycode(){
// 	alert("hi");
// }



for(var i=0; i < modebuttons.length; i++)
{
   //console.log("listening 1");
	modebuttons[i].addEventListener("click",function(){
		modebuttons[0].classList.remove("selected");
		modebuttons[1].classList.remove("selected");
		//console.log("listening 2");
		this.classList.add("selected");
		if(this.textContent === "Easy")
			 {numsquare=3;countlimit=2;}
		else
			{numsquare=6;countlimit=3;}
		reset();
	});
}

function reset(){
         colors=generaterandomcolor(numsquare);
		  pickedcolor=pickrandomcolor();
		  colordisplay.textContent =pickedcolor;
	      messageDisplay.textContent="";
		  for(var i=0; i<square.length; i++){
		    if(colors[i])
 	    	{
 	    		square[i].style.display="block";
 	    	square[i].style.backgroundColor=colors[i];
 	    	}
 	    else
 	    	{
 	    		square[i].style.display="none";
 	    	}
	      }
	    idh1.style.backgroundColor="steelblue";
	    resetButton.textContent="New game";
}
/******************* for easy mode ********* 2nd approach ***********************/
// easybtn.addEventListener("click",function(){
// 	 idh1.style.backgroundColor="steelblue";
// 	  resetButton.textContent="New game";
// 	hardbtn.classList.remove("selected");
// 	easybtn.classList.add("selected");
// 	numsquare=3;
// 	colors=generaterandomcolor(numsquare);
// 	  pickedcolor=pickrandomcolor();
// 	  colordisplay.textContent =pickedcolor;
//       messageDisplay.textContent="";
// 	  for(var i=0; i<square.length; i++){
// 	    if(colors[i])
// 	    	{
// 	    	square[i].style.backgroundColor=colors[i];
// 	    	}
// 	    else
// 	    	{
// 	    		square[i].style.display="none";
// 	    	}
//     }
// });


// ******************** for hard mode ***************************************
// hardbtn.addEventListener("click",function(){
// 	 idh1.style.backgroundColor="steelblue";
// 	  resetButton.textContent="New game";
// 	easybtn.classList.remove("selected");
// 	hardbtn.classList.add("selected");
//      numsquare=6;
// 	colors=generaterandomcolor(numsquare);
// 	  pickedcolor=pickrandomcolor();
// 	  colordisplay.textContent =pickedcolor;
//       messageDisplay.textContent="";
// 	  for(var i=0; i<square.length; i++){
// 	    	square[i].style.backgroundColor=colors[i];
// 	    	square[i].style.display="block";
//     }
// });


/****************  to reset or play new game ******************************************/
resetButton.addEventListener("click",function(){
	  colors=generaterandomcolor(numsquare);
	  if(numsquare==3)
	  	{
             countlimit=2;
             count=0;
	  	}
	  	else if(numsquare==6)
	  	{
	  		countlimit=3;
	  		count=0;
	  	}
	  pickedcolor=pickrandomcolor();
	  colordisplay.textContent =pickedcolor;
      messageDisplay.textContent="";
	  for(var i=0; i<square.length; i++){
	    square[i].style.backgroundColor=colors[i];
    }
    idh1.style.backgroundColor="steelblue";
    resetButton.textContent="New game";
});
/***************************** to generate color array *************************************/
function generaterandomcolor(num){
 var arr=[];
 for(var i=0;i<num;i++){
 	arr.push(randomcolor());
 }
 return arr;
}

function randomcolor(){
   // generate random numbers for rgb i.e. red graan blue between 0 - 255
   var r=Math.floor(Math.random() * 256);
   var g=Math.floor(Math.random() * 256);
   var b=Math.floor(Math.random() * 256);

   return "rgb("+r+", "+g+", "+b+")"; 
}

/******************************* Picking a secret Random color **********************************/
function pickrandomcolor(){
	// below code generates numbers ranging from 0 to (color.length)-1
   var rnd=Math.floor(Math.random() * colors.length);
   return colors[rnd];
}
/*******************************************************************************/

for(var i=0; i<square.length; i++){
		square[i].style.backgroundColor=colors[i];
	    
	    //add click listeners to squares
	    square[i].addEventListener("click",function(){

		    	//grab the clicked square color
		    	var clickedcolor=this.style.backgroundColor;
		    	if(clickedcolor === pickedcolor && count <= countlimit-1)
		    	{
                      // alert("Correct!!");
                      count=0;
		    		messageDisplay.textContent="!! Hurray You won !!";
		    		//this.textContent="!!correct!!"
		    		idh1.style.backgroundColor=clickedcolor;
		    		resetButton.textContent="Play Again";
		    		colorchange(clickedcolor);    		
		    	}
		    	else
		    	{
		    		if(count <= countlimit-1)
		    		{
			    		count=count+1;
			    		this.style.backgroundColor="#232323";
			    		messageDisplay.textContent="Try Again";
		    		}
		    		else
		    		{
                        count=0;
                        alert("!! oops, you have completed all your chance!!");
                        reset();
		    		}
		    	}
	    });
}

// on success change all square colors equal to winning color
function colorchange(color){
	for(var i=0;i<square.length; i++)
       {
       	square[i].style.backgroundColor=color;
       }
}


