/* eslint-disable no-unused-vars */
// import functions and grab DOM elements
const cityDropdown = document.getElementById('city-dropdown');
const styleDropdown = document.getElementById('style-dropdown');

const cityEl = document.getElementById('city');
const styleEl = document.getElementById('style');
const reportEl = document.getElementById('report');

const sloganEl = document.getElementById('slogan');
const sloganInput = document.getElementById('slogan-input');
const sloganButton = document.getElementById('slogan-button');
// let state
let slogans = [];
let cityCounter = 0;
let styleCounter = 0;
// set event listeners 
cityDropdown.addEventListener('change', (e) => {
  const value = e.target.value;
  cityEl.style.backgroundImage = `url("./assets/${value}-city.png")`;
  cityCounter++;
});

/*styleDropdown.addEventListener('change', (e) => {
  const value = e.target.value;
  styleEl.style.backgroundImage = `url("./assets/${value}-style.png")`;
  styleCounter++;
}); 