var num1Field=document.getElementById("numField1");
var num2Field=document.getElementById("numField2");
var result=document.getElementById("numResultField");
var form = document.getElementById("percentForm");
var pi = 3.1415926535897932384626433;


document.getElementById("calc1").addEventListener('click', function(event){
	if(!num1Field.value||!num2Field.value){
		alert("Please enter values in the fields");
	}else{
		var x = parseFloat(num1Field.value);
		var y = parseFloat(num2Field.value);

		var percent = (x/y)*100;

		result.innerHTML="Answer: " + percent + "%";
		event.preventDefault();
	}
});

var num3Field=document.getElementById("numField3");
var num4Field=document.getElementById("numField4");
var coneVolume=document.getElementById("coneVolume");
var coneArea=document.getElementById("coneArea");
document.getElementById("calc2").addEventListener('click', function(event){
	if(!num3Field.value||!num4Field.value){
		alert("Please enter values in the fields");
	}else{
		var radius = parseFloat(num3Field.value);
		var height = parseFloat(num4Field.value);

		var volume = (1/3)*pi*radius*radius*height;
		var area = pi*Math.pow(radius,2) + pi*radius*(Math.sqrt((Math.pow(height,2)+Math.pow(radius,2))));
		coneVolume.innerHTML="Volume: " + volume + " cubic units.";
		coneArea.innerHTML="Surface area: " + area + " square units.";

		event.preventDefault();
	}
});

var num5Field=document.getElementById("numField5");
var num6Field=document.getElementById("numField6");
var cylinderVolume=document.getElementById("cylinderVolume");
var cylinderArea=document.getElementById("cylinderArea");
document.getElementById("calc3").addEventListener('click', function(event){
	if(!num5Field.value||!num6Field.value){
		alert("Please enter values in the fields");
	}else{
		var radius = parseFloat(num5Field.value);
		var height = parseFloat(num6Field.value);

		var volume = pi*radius*radius*height;
		var area = 2*pi*Math.pow(radius,2) + 2*pi*radius*height;
		cylinderVolume.innerHTML="Volume: " + volume + " cubic units.";
		cylinderArea.innerHTML="Surface area: " + area + " square units.";

		event.preventDefault();
	}
});

var num7Field=document.getElementById("numField7");
var num8Field=document.getElementById("numField8");
var num9Field=document.getElementById("numField9");
var num10Field=document.getElementById("numField10");
var distance=document.getElementById("distance");
document.getElementById("calc4").addEventListener('click', function(event){
	if(!num7Field.value||!num8Field.value||!num9Field.value||!num10Field.value){
		alert("Please enter values in the fields");
	}else{
		var x1 = parseFloat(num7Field.value);
		var y1 = parseFloat(num8Field.value);
		var x2 = parseFloat(num9Field.value);
		var y2 = parseFloat(num10Field.value);

		var d = Math.sqrt(Math.pow(Math.abs(x1-x2),2)+Math.pow(Math.abs(y1-y2),2));
		distance.innerHTML="Distance: " + d + " units.";

		event.preventDefault();
	}
});

var num11Field=document.getElementById("numField11");
var num12Field=document.getElementById("numField12");
var num13Field=document.getElementById("numField13");
var side3=document.getElementById("side3");
document.getElementById("calc5").addEventListener('click', function(event){
	if(!num11Field.value||!num12Field.value||!num13Field.value){
		alert("Please enter values in the fields");
	}else{
		var a = parseFloat(num11Field.value);
		var b = parseFloat(num12Field.value);
		var c = parseFloat(num13Field.value);

		var s = Math.sqrt(Math.pow(a,2)+Math.pow(b,2)-2*a*b*Math.cos(c));
		side3.innerHTML="The third side has a length of : " + s + " units.";

		event.preventDefault();
	}
});

var num14Field=document.getElementById("numField14");
var num15Field=document.getElementById("numField15");
var num16Field=document.getElementById("numField16");
var quadthag=document.getElementById("quadthag");
document.getElementById("calc6").addEventListener('click', function(event){
		if(!num14Field.value||!num15Field.value||!num16Field.value){
			alert("Please enter values in the fields");
		}else{
			var ap = parseFloat(num14Field.value);
			var bp = parseFloat(num15Field.value);
			var cp = parseFloat(num16Field.value);
		

	let discriminant = bp*bp-4*ap*cp;

	let root1, root2;



	if (discriminant > 0) {
	    root1 = (-bp + Math.sqrt(discriminant)) / (2 * ap);
	    root2 = (-bp - Math.sqrt(discriminant)) / (2 * ap);

	    quadthag.innerHTML="The roots are " + root1 + " and " + root2;



	    
	}

	else if (discriminant == 0) {
	    root1 = root2 = -bp / (2 * ap);

		quadthag.innerHTML="The roots are " + root1 + " and " + root2;
	   
	}

	else{
	    let realPart = (-bp / (2 * ap)).toFixed(2);
	    let imagPart = (Math.sqrt(-discriminant) / (2 * ap)).toFixed(2);
		quadthag.innerHTML="The roots of quadratic equation are " + realPart + " " + imagPart + "i and " + realPart +"-" + imagPart+"i";
		}
			

		}
	event.preventDefault();

});

var num17Field=document.getElementById("numField17");
var num18Field=document.getElementById("numField18");
var num19Field=document.getElementById("numField19");
var thirdValue=document.getElementById("thirdValue");
document.getElementById("calc7").addEventListener('click', function(event){
	if(!num17Field.value||!num18Field.value||!num19Field.value){
		alert("Please enter values in the fields");
	}else{
		var h = parseFloat(num17Field.value);
		var i = parseFloat(num18Field.value);
		var j = parseFloat(num19Field.value);
		var value;

		if(h==0){
			value=Math.sqrt(Math.pow(i, 2)-Math.pow(j,2));
		}else if(i==0){
			value=Math.sqrt(Math.pow(j,2)-Math.pow(h,2));
		}else if(j==0){
			value=Math.sqrt(Math.pow(h,2)+Math.pow(i,2));
		}else{
			alert("Please enter values correctly");
		}


		thirdValue.innerHTML="The third side has a length of : " + value + " units.";

		event.preventDefault();
	}
});

var num20Field=document.getElementById("numField20");
var num21Field=document.getElementById("numField21");
var num22Field=document.getElementById("numField22");
var num23Field=document.getElementById("numField23");
console.log(num20Field);
console.log(num21Field);
console.log(num22Field);
console.log(num23Field);
var slope=document.getElementById("slope");
document.getElementById("calc8").addEventListener('click', function(event){
	if(!num20Field.value||!num21Field.value||!num22Field.value||!num23Field.value){
		alert("Please enter values in the fields");
	}else{
		var x3 = parseFloat(num20Field.value);
		var y3 = parseFloat(num21Field.value);
		var x4 = parseFloat(num22Field.value);
		var y4 = parseFloat(num23Field.value);

		var dx=x3-x4;
		var dy=y3-y4;

		var sl = dy/dx;
		slope.innerHTML="Slope: " + sl;

		event.preventDefault();
	}
});

var num24Field=document.getElementById("numField24");
var sphereVolume=document.getElementById("sphereVolume");
var sphereArea=document.getElementById("sphereArea");
document.getElementById("calc9").addEventListener('click', function(event){
	if(!num24Field.value){
		alert("Please enter values in the fields");
	}else{
		var rad = parseFloat(num24Field.value);

		var vol = (4/3)*pi*(Math.pow(rad,3));
		var ar = 4*pi*(Math.pow(rad,2));
		sphereVolume.innerHTML="The volume of the sphere is: " + vol + " cubic units.";
		sphereArea.innerHTML="The surface area of the sphere is: " + ar + " square units.";

		event.preventDefault();
	}
});

for(var i = 1; i <= 9; i++){
	document.getElementById("calc" + i).addEventListener('click', function(event){
		random_bg_color();
	});
}

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = 100+ Math.floor(Math.random() * 256);
    var z = 50+ Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  	console.log(bgColor);
  	var num = Math.floor(Math.random() * 3);
  	console.log(num);
  	var divs = document.getElementsByTagName("div");
  	if(num == 0){
  		for(var i = 0; i < divs.length; i++){
			divs[i].style.backgroundImage = "url(images/first.png)";
		}
  	}else if(num == 1){
  		for(var i = 0; i < divs.length; i++){
			divs[i].style.backgroundImage = "url(images/puddin.jpg)"; 
		}
  	}else{
  		for(var i = 0; i < divs.length; i++){
			divs[i].style.backgroundImage = "url(images/arnold.png)";
		}
  	}
    document.body.style.background = bgColor;
}
function random_bg_color2() {
    var x = Math.floor(Math.random() * 256);
    var y = 100+ Math.floor(Math.random() * 256);
    var z = 50+ Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  	console.log(bgColor);
    document.getElementById("title").style.background = bgColor;
}
//var timer = setInterval("random_bg_color()", 1000);
var timer2 = setInterval("random_bg_color2()", 100);

/*
cum
*/