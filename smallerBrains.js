"use strict";

//if you're on a page, it should be dulled with no ability to click it - top and bottom


const projectOneTop = document.getElementById('projectOneLinkTop');
const projectTwoTop = document.getElementById('projectTwoTop');
const projectThreeTop = document.getElementById('projectThreeTop');
const projectOneBottom = document.getElementById('projectOneBottom');
const projectTwoBottom = document.getElementById('projectTwoBottom');
const projectThreeBottom = document.getElementById('projectThreeBottom');
const projectTwoGithubTop = document.getElementById('projectTwoGithubTop');
const projectThreeGithubTop = document.getElementById('projectThreeGithubTop');
const projectTwoGithubBottom = document.getElementById('projectTwoGithubBottom');
const projectThreeGithubBottom = document.getElementById('projectThreeGithubBottom');

function dimProjectOne() {
	projectOneTop.style.color = 'red';
	projectTwoTop.style.color = '#28486b';
	projectThreeTop.style.color = '#28486b';
	projectOneBottom.style.color = 'red';
	projectTwoBottom.style.color = '#e9f3fe';
	projectThreeBottom.style.color = '#e9f3fe';
	projectTwoGithubTop.style.color = '#e9f3fe';
	projectThreeGithubTop.style.color = '#e9f3fe';
	projectTwoGithubBottom.style.color = '#e9f3fe';
	projectThreeGithubBottom.style.color = '#e9f3fe';
};
function dimProjectTwo() {
	projectOneTop.style.color = '#28486b';
	projectTwoTop.style.color = 'red';
	projectThreeTop.style.color = '#28486b';
	projectOneBottom.style.color = '#e9f3fe';
	projectTwoBottom.style.color = 'red';
	projectThreeBottom.style.color = '#e9f3fe';
	projectTwoGithubTop.style.color = 'red';
	projectThreeGithubTop.style.color = '#e9f3fe';
	projectTwoGithubBottom.style.color = 'red';
	projectThreeGithubBottom.style.color = '#e9f3fe';
};
function dimProjectThree() {
	projectOneTop.style.color = '#28486b';
	projectTwoTop.style.color = '#28486b';
	projectThreeTop.style.color = 'red';
	projectOneBottom.style.color = '#e9f3fe';
	projectTwoBottom.style.color = '#e9f3fe';
	projectThreeBottom.style.color = 'red';
	projectTwoGithubTop.style.color = '#e9f3fe';
	projectThreeGithubTop.style.color = 'red';
	projectTwoGithubBottom.style.color = '#e9f3fe';
	projectThreeGithubBottom.style.color = 'red';
};

projectOneTop.addEventListener('click', function () {
	dimProjectOne();
});
projectTwoTop.addEventListener('click', function () {
	dimProjectTwo();
});
projectThreeTop.addEventListener('click', function () {
	dimProjectThree();
});
projectOneBottom.addEventListener('click', function () {
	dimProjectOne();
});
projectTwoBottom.addEventListener('click', function () {
	dimProjectTwo();
});
projectThreeBottom.addEventListener('click', function () {
	dimProjectThree();
});
projectTwoGithubTop.addEventListener('click', function () {
	dimProjectTwo();
});
projectThreeGithubTop.addEventListener('click', function () {
	dimProjectThree();
});
projectTwoGithubBottom.addEventListener('click', function () {
	dimProjectTwo();
});
projectThreeGithubBottom.addEventListener('click', function () {
	dimProjectThree();
});

//inserts the correct project desc when the right button is pressed