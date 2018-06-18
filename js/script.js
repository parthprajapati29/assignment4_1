console.log("script connected");

function button1(){
	console.log("in button1");

	alert("1. if age >18 it will return true else confirm , 2. if age >18 return true but also aks for confirmation ");
	// 1. if age is greater then 18 it will print true else it will ask for confirmation ,
	// 	    2. if age is greater then 18 it returns true & it will confirmonce again
}

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }


// function checkAge1(age) {
//   if (age > 18) {
//     return true;
//   }
//  return confirm('Did parents allow you?');
//  console.log(ret)
// }

// console.log(checkAge(15));
// console.log(checkAge1(2));


// function button2(age){

// 	var a = (age>18) ?  true; : confirm("Did your friend allow");
//     console.log(a);
// }

function button2(){

	var a = prompt("enter your age");
	sid = (a>18) ? true : false ;
	
	if(sid==false){
	confirm("did your parents allowed you ");
	}else{alert(true);}
}

function button3 () {
	var max;
	var a = this.i1.value;
	var b = this.i2.value;
	// if(a==b){

	// 	alert("please enter different numbers..");

	(a<b) ? (alert("min value is "+a))
	      : (alert("min value is "+b));
}  

 function primNumber(){

 	var i,j,num=100, n;
 	for (i = 1; i <= num; i++) {
            
            for (j = 2; j < i; j++) {
	                 n = i % j;
	                if (n == 0) {
	                    break;
	        		}
	        }
	        if (i == j) {
	                console.log(" " +i);
	        } 
	}

}

(function(){	
	var x= "Welcome to the assignmetn i am IIFE ";
	alert (x);
})();


// function declaration
function fdeclare(){
        var a = "fn declaration";
        alert("this is : " +a);
}

// function expression

function dexpression(){

	var b= function(){
		alert("this is executed by function expression");
	}
	b();
}

function sub(a,b){

	var multiple = a*b;
	document.getElementById('demo2').innerHTML = multiple;
}

function multiplenumber(){
	return sub(5,5);
}


function todaysDate(){
	//var a = Date();
	//console.log(a);
	document.getElementById("p1").innerHTML = Date();
}

function AgeCheck(){
	var a = this.age.value;
	if(a>18){
		alert("your age is greater then 18");
	}else{
		alert("not eligible");
	}
}

function AgeCheck_ternary(age){
		var a = age > 18 ? true : confirm('Did parents allow you?');
		alert(a);
}


function addition(x,y) {
	    
    var z = x+y;
    document.getElementById("p2").innerHTML = "please see the console";
    console.log(z);
    
}

function bgchangeaspertime(){

     var d = new Date();
     var n = d.getHours();
    if(n>=0 && n<=12){
 		  document.body.style.background = "yellow";
 		  
    }else if(n>=12 && n<=18){
    	document.body.style.background = "Blue";
    }
     else if(n>=18 && n<=23){
     	document.body.style.background = "Black";		
	}
}

// * to get the maximum value from the given array.
function  maxNumber(){
	var array = [3 , 6, 2, 99, 32, 5, 89, 32];
	var largest= array[0];

	for (i=0; i<=largest;i++){
    		if (array[i]>largest) {
        	var largest=array[i];
    		}	
	}
	console.log(largest);

}

function  minNumber(){
	var array = [3 , 6, 2, 99, 32, 1, 89, 32];
    var minvalue = array[0]; 
	for (var i = 0; i < array.length; i++) {
    			if(array[i]<minvalue)
    			{
			        minvalue = array[i];
   				 }

	}
console.log(minvalue);

}

function palindrome(){
	var number = "malayalam";
	number = number + "";
	numberreverse = number.split("").reverse().join('');
	console.log ("The number if reversed is: " +numberreverse);
	if (number == numberreverse){
 	   console.log("Yes, this is a palindrome");}
	else{
    console.log("Nope! It isnt a palindrome");}
}

function fibonacci(){
	var n = this.fib.value;
	var i,t1=0,t2=1, nextTerm;
	for (i = 0; i <= n; ++i) 			//initialization, conditon, increment decrement
    {
    //	console.log(i); 
        nextTerm = t1 + t2;       		//addition is saved to nextTerm	
        t1 = t2;
        t2 = nextTerm;
        console.log(t1);				// display the original value
        
    }
     	
}

// window.onscroll = function() {
// stickyNav()
// }; // onscroll calling the stickyNav function

// 		var header = docuwindow.onscroll = function() {stickyNav()}; // onscroll calling the stickyNav function

// 		var header = document.getElementById("navbar");
// 		var sticky = header.offsetTop;  // checking the pixels above the header and returning it to sticky var

// 		function stickyNav() {
// 		  if (window.pageYOffset >= sticky) {  // if the page y offset is greater than the header top offset that is if it passes through the header then add class sticky to it else remove it
// 		    header.classList.add("sticky");
// 		  } else {
// 		    header.classList.remove("sticky");
// 		  }
// 		}ment.getElementById("navbar");
// 		var sticky = header.offsetTop;  // checking the pixels above the header and returning it to sticky var

// 		function stickyNav() {
// 		  if (window.pageYOffset >= sticky) {  // if the page y offset is greater than the header top offset that is if it passes through the header then add class sticky to it else remove it
// 		    header.classList.add("sticky");
// 		  } else {
// 		    header.classList.remove("sticky");
// 		  }
// 		}

function show_dropdown(){
			document.getElementById("level2").style.visibility = "visible"; //css visibility :hidden is changed to :visible for id level12 due to which li section gets visible
		}
function hide_dropdown(){
			document.getElementById("level2").style.visibility = "hidden";  //css visibility :visible is changed to :hidden for id level12 & hides Li section
		}
function show_dropdown2(){
			document.getElementById("level3").style.visibility = "visible"; //css visibility :hidden is changed to :visible for id level12
		}
		function hide_dropdown2(){
			document.getElementById("level3").style.visibility = "hidden";  //css visibility :visible is changed to :hidden for id level12
		}