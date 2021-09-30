


// part 1
function computeForce() {
    // code
	let mass = parseFloat(document.getElementById('mass').value);
	let acceleration = parseFloat(document.getElementById('accel').value);
	let f = mass * acceleration;
	
	document.getElementById('result').innerHTML = f;
}


// part 2
function computeDisplacement() {
    // code
	let v = parseFloat(document.getElementById('velocity').value);
	let t = parseFloat(document.getElementById('time').value);
	let a = parseFloat(document.getElementById('acceleration').value);
	let displacement = v * t -(1/2*a)*(t^2);
	
	document.getElementById('result2').innerHTML = displacement;
}


// part 3
function computeQuadratic() {
    // code
	/*
		I hit a wall with my formula returning either NaN or Undefined due to
		trying to take a square root of a negative number. I had to look up a solution
		and found this at https://www.programiz.com/javascript/examples/quadratic-roots
	*/
	let num1 = prompt("Enter the first number","0");
	if(num1 === null){
		return;
	}
	
	let num2 = prompt("Enter the second number","0");
	if(num2 === null){
		return;
	}
	
	let num3 = prompt("Enter the third number","0");
	if(num3 === null){
		return;
	}
	
	let a = parseFloat(num1);
	let b = parseFloat(num2);
	let c = parseFloat(num3);
	
	let discriminant = (Math.pow(b,2) - 4 * a * c);
	
	if(discriminant > 0){
		root1 = (-1 * b + Math.sqrt(discriminant)) / (2 * a);
		root2 = (-1 * b - Math.sqrt(discriminant)) / (2 * a);
	}
	else if(discriminant == 0){
		root1 = -b/(2*a);
		root2 = root1;
	}
	else{
		let real = (-b/(2 * a)).toFixed(2);
		let imaginary = (Math.sqrt(-discriminant)/(2 * a)).toFixed(2);
		root1 = real + " + " + imaginary + "i";
		root2 = root1;
	}
	
	document.getElementById('quadratic').innerHTML = "The first root number is " + root1 + " and the second root number is " + root2;
}

// part 4
function computePrincipal() {
    // code
	let PMTString = prompt("What is the PMT?","0");
		if(PMTString === null){
		return;
	}
	
	let rateString = prompt("Enter the rate as a percent","0");
		if(rateString === null){
		return;
	}
	
	let paymentString = prompt("How long will payments be made?","0");
		if(paymentString === null){
		return;
	}
	
	let PMT = parseFloat(PMTString);
	let r = parseFloat(rateString)/100;
	let n = parseFloat(paymentString);
	
	let p = PMT * ((1 - (1/Math.pow((1 + r),n)))/r);
	
	document.getElementById('principal').innerHTML = "P = " + p.toFixed(2);
}