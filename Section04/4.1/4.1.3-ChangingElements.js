// print the outer HTML of the navigation bar
const outerNav = document.querySelector('.nav-bar').outerHTML;
console.log(outerNav);
// print the inner HTML of the navigation bar
const innerNav = document.querySelector('.nav-bar').innerHTML;
console.log(innerNav);
// print the text content of the #class-schedule-list element
console.log(document.querySelector('#class-schedule-list').textContent);
// select the classList for the first class-week, then add the class "week-1"

// select the img element and add a src attribute
document.querySelector('img').src = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*';
// change the font color of the h1 element
document.querySelector('h1').style.color = 'red';
