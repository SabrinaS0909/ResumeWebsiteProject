"use strict";

function loadHundredPercentBars() {
	const hundredPercentBars = document.getElementsByClassName('hundredPercent'); //all skill bars that are maxed out
	const hundred = Array.from(hundredPercentBars); //turned it into an Array
	hundred.forEach(function(bar){ 
		let i = 0;
		
		if(i == 0){
			i = 1;
			let  elem = bar;
			let width = 10;
			let id = setInterval(frame, 10);
			function frame(){
				if (width >= 100){
					clearInterval(id);
					i = 0;
				} else{
					width++;
					elem.style.width = width + "%";
				};
			};
		};
	});	
};

function loadSeventyFivePercentBars() {
	const seventyFivePercentBars = document.getElementsByClassName('seventyFivePercent'); //all skill bars that are 75%
	const seventyFive = Array.from(seventyFivePercentBars);
	seventyFive.forEach(function(bar){ 
		let i = 0;
		
		if(i == 0){
			i = 1;
			let  elem = bar;
			let width = 10;
			let id = setInterval(frame, 10);
			function frame(){
				if (width >= 75){
					clearInterval(id);
					i = 0;
				} else{
					width++;
					elem.style.width = width + "%";
				};
			};
		};
	});	
};

function loadFiftyPercentBars() {
	const fiftyPercentBars = document.getElementsByClassName('fiftyPercent'); //all skill bars that are 50%
	const fifty = Array.from(fiftyPercentBars); 
	fifty.forEach(function(bar){ 
		let i = 0;
		
		if(i == 0){
			i = 1;
			let  elem = bar;
			let width = 10;
			let id = setInterval(frame, 10);
			function frame(){
				if (width >= 50){
					clearInterval(id);
					i = 0;
				} else {
					width++;
					elem.style.width = width + "%";
				};
			};
		};
	});	
};

loadHundredPercentBars();
loadSeventyFivePercentBars();
loadFiftyPercentBars();

const initialCert = document.getElementById('revealsInitialCert');
const sqlCert = document.getElementById('sqlCert');
const pythonCert = document.getElementById('pythonCert');
let openCert = initialCert;

window.onload = function () {
	const certWindowContainer = document.getElementById('certWindowContainer');
	const xButton = document.getElementById('xButton');
	const leftArrow = document.getElementById('leftArrow');
	const rightArrow = document.getElementById('rightArrow');
	const dimWindow = document.getElementById('revealsDimWindow');
	const dots = document.getElementById('dots');
	const dotHover = document.querySelectorAll('.dot');
	const firstDot = document.getElementById('dotOne');
	const secondDot = document.getElementById('dotTwo');
	const thirdDot = document.getElementById('dotThree');
//OpenCerts
	const certOpenButtons = document.getElementsByClassName('buttonToOpenCerts'); //grabs both buttons that open certs
	const openButtons = Array.from(certOpenButtons); 
	openButtons.forEach(function(button){
		button.addEventListener('click', function() {
			certWindowContainer.style.visibility = 'visible';
			initialCert.style.visibility = 'visible';
			dimWindow.style.visibility = 'visible';
			rightArrow.style.visibility = 'visible';
			xButton.style.visibility = 'visible';
			leftArrow.style.visibility = 'visible';
			dots.style.visibility = 'visible';
			leftArrow.style.filter = 'brightness(50%)';
			rightArrow.style.filter = 'brightness(100%)';
			firstDot.style.border = 'solid 3px #bfd9f8';
			firstDot.style.backgroundColor = '#daebfe';
			firstDot.style.boxShadow = '0px 5px 30px 10px #bfd9f8';
		})
	})
//CloseCerts
	xButton.addEventListener('click', function () {
		certWindowContainer.style.visibility = 'hidden';
		initialCert.style.visibility = 'hidden';
		sqlCert.style.visibility = 'hidden';
		pythonCert.style.visibility = 'hidden';
		dimWindow.style.visibility = 'hidden';
		xButton.style.visibility = 'hidden';
		leftArrow.style.visibility = 'hidden';
		rightArrow.style.visibility = 'hidden';
		dots.style.visibility = 'hidden';
		openCert = initialCert;
		firstDot.style.border = 'solid 3px #bfd9f8';
		firstDot.style.backgroundColor = '#daebfe';
		firstDot.style.boxShadow = '0px 5px 30px 10px #bfd9f8';
		secondDot.style.border = 'solid 2px white';
		secondDot.style.backgroundColor = '#9553f1';
		secondDot.style.boxShadow = '0px 0px 0px 0px';
		thirdDot.style.border = 'solid 2px white';
		thirdDot.style.backgroundColor = '#9553f1';
		thirdDot.style.boxShadow = '0px 0px 0px 0px';
	});
	
	
	function leftArrowButton() {
		if (openCert == initialCert) {
			console.log('left arrow clicked');
		}
		else if (openCert == sqlCert) {
			sqlCert.style.visibility = 'hidden';
			initialCert.style.visibility = 'visible';
			leftArrow.style.filter = 'brightness(50%)';
			openCert = initialCert;
			firstDot.style.border = 'solid 3px #bfd9f8';
			firstDot.style.backgroundColor = '#daebfe';
			firstDot.style.boxShadow = '0px 5px 30px 10px #bfd9f8';
			secondDot.style.border = 'solid 2px white';
			secondDot.style.backgroundColor = '#9553f1';
			secondDot.style.boxShadow = '0px 0px 0px 0px';
		}
		else if (openCert == pythonCert) {
			pythonCert.style.visibility = 'hidden';
			sqlCert.style.visibility = 'visible';
			rightArrow.style.filter = 'brightness(100%)';
			openCert = sqlCert;
			secondDot.style.border = 'solid 3px #bfd9f8';
			secondDot.style.backgroundColor = '#daebfe';
			secondDot.style.boxShadow = '0px 5px 30px 10px #bfd9f8';
			thirdDot.style.border = 'solid 2px white';
			thirdDot.style.backgroundColor = '#9553f1';
			thirdDot.style.boxShadow = '0px 0px 0px 0px';
		}
	};
	function rightArrowButton() {
		if (openCert == initialCert) {
			initialCert.style.visibility = 'hidden';
			sqlCert.style.visibility = 'visible';
			leftArrow.style.filter = 'brightness(100%)';
			openCert = sqlCert;
			secondDot.style.border = 'solid 3px #bfd9f8';
			secondDot.style.backgroundColor = '#daebfe';
			secondDot.style.boxShadow = '0px 5px 30px 10px #bfd9f8';
			firstDot.style.border = 'solid 2px white';
			firstDot.style.backgroundColor = '#9553f1';
			firstDot.style.boxShadow = '0px 0px 0px 0px';
		}
		else if (openCert == sqlCert) {
			sqlCert.style.visibility = 'hidden';
			pythonCert.style.visibility = 'visible';
			rightArrow.style.filter = 'brightness(50%)';
			openCert = pythonCert;
			thirdDot.style.border = 'solid 3px #bfd9f8';
			thirdDot.style.backgroundColor = '#daebfe';
			thirdDot.style.boxShadow = '0px 5px 30px 10px #bfd9f8';
			secondDot.style.border = 'solid 2px white';
			secondDot.style.backgroundColor = '#9553f1';
			secondDot.style.boxShadow = '0px 0px 0px 0px';
		}
		else if (openCert == pythonCert) {
			console.log('right arrow clicked')
		}
	};
	
	leftArrow.addEventListener('click', function () {
		leftArrowButton();
	});
	rightArrow.addEventListener('click', function () {
		rightArrowButton();
	});
	
//little dot page indicator
	function firstDotButton() {
		sqlCert.style.visibility = 'hidden';
		pythonCert.style.visibility = 'hidden';
		initialCert.style.visibility = 'visible';
		leftArrow.style.filter = 'brightness(50%)';
		rightArrow.style.filter = 'brightness(100%)';
		openCert = initialCert;
		firstDot.style.border = 'solid 3px #bfd9f8';
		firstDot.style.backgroundColor = '#daebfe';
		firstDot.style.boxShadow = '0px 5px 30px 10px #bfd9f8';
		secondDot.style.border = 'solid 2px white';
		secondDot.style.backgroundColor = '#9553f1';
		secondDot.style.boxShadow = '0px 0px 0px 0px';
		thirdDot.style.border = 'solid 2px white';
		thirdDot.style.backgroundColor = '#9553f1';
		thirdDot.style.boxShadow = '0px 0px 0px 0px';
	};
	function secondDotButton() {
		sqlCert.style.visibility = 'visible';
		pythonCert.style.visibility = 'hidden';
		initialCert.style.visibility = 'hidden';
		leftArrow.style.filter = 'brightness(100%)';
		rightArrow.style.filter = 'brightness(100%)';
		openCert = sqlCert;
		secondDot.style.border = 'solid 3px #bfd9f8';
		secondDot.style.backgroundColor = '#daebfe';
		secondDot.style.boxShadow = '0px 5px 30px 10px #bfd9f8';
		firstDot.style.border = 'solid 2px white';
		firstDot.style.backgroundColor = '#9553f1';
		firstDot.style.boxShadow = '0px 0px 0px 0px';
		thirdDot.style.border = 'solid 2px white';
		thirdDot.style.backgroundColor = '#9553f1';
		thirdDot.style.boxShadow = '0px 0px 0px 0px';
	};
	function thirdDotButton() {
		sqlCert.style.visibility = 'hidden';
		pythonCert.style.visibility = 'visible';
		initialCert.style.visibility = 'hidden';
		leftArrow.style.filter = 'brightness(100%)';
		rightArrow.style.filter = 'brightness(50%)';
		openCert = pythonCert;
		thirdDot.style.border = 'solid 3px #bfd9f8';
		thirdDot.style.backgroundColor = '#daebfe';
		thirdDot.style.boxShadow = '0px 5px 30px 10px #bfd9f8';
		secondDot.style.border = 'solid 2px white';
		secondDot.style.backgroundColor = '#9553f1';
		secondDot.style.boxShadow = '0px 0px 0px 0px';
		firstDot.style.border = 'solid 2px white';
		firstDot.style.backgroundColor = '#9553f1';
		firstDot.style.boxShadow = '0px 0px 0px 0px';
	};
	
	firstDot.addEventListener('click', function () {
		firstDotButton()
	});
	secondDot.addEventListener('click', function () {
		secondDotButton()
	});
	thirdDot.addEventListener('click', function () {
		thirdDotButton()
	});
};