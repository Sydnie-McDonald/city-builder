/* eslint-disable indent */

/* eslint-disable no-unused-vars */
// import functions and grab DOM elements
const cityDropdown = document.getElementById('city-dropdown');
const cityImg = document.getElementById('city-image');
const styleDropdown = document.getElementById('style-dropdown');
const styleImg = document.getElementById('style-image');
const activityDropdown = document.getElementById('activity-dropdown');
const activityImg = document.getElementById('activity-image');

const cityEl = document.getElementById('city');
const styleEl = document.getElementById('style');
const activityEl = document.getElementById('activity');
const reportEl = document.getElementById('report');

const sloganEl = document.getElementById('slogan');
const sloganInput = document.getElementById('slogan-input');
const sloganButton = document.getElementById('slogan-button');
const sloganList = document.getElementById('slogan-list');
// let state
let slogans = [];
let cityCounter = 0;
let styleCounter = 0;
let activityCounter = 0;
// functions
function displayStats() {

}
function displaySlogans() {
  sloganList.textContent = '';
  for (let slogan of slogans) {
    const p = document.createElement('p');
    p.textContent = slogan;
    sloganList.append(p);
  }
}
// set event listeners 
cityDropdown.addEventListener('change', (e) => {
  cityEl.textContent = ' ';
  const value = e.target.value;
  cityImg.src = `./assets/${value}-city.jpeg`;
  cityCounter++;
});

styleDropdown.addEventListener('change', (e) => {
  const value = e.target.value;
  styleImg.src = `./assets/${value}-style.jpeg`;
  styleCounter++;
});

activityDropdown.addEventListener('change', (e) => {
  const value = e.target.value;
  activityImg.src = `./assets/${value}-activity.jpeg`;
  activityCounter++;
});

sloganButton.addEventListener('click', (e) => {
  slogans.push(sloganInput.value);
  displaySlogans();
});
