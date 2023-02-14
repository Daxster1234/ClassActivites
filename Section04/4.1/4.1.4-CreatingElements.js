// create a new unordered list (ul) element
const newUl = document.createElement('ul');
// remove the paragraph element in the nav-bar
const rmPara = document.querySelector('p');
document.querySelector('.nav-bar').removeChild(rmPara);
// add your new ul element to the nav-bar
document.querySelector('.nav-bar').appendChild(newUl);
// create two new list item (li) elements, and add some text to them
const liOne = document.createElement('li');
const liTwo = document.createElement('li');
liOne.textContent = 'First New List Item';
liTwo.textContent = 'Second New List Item'
// add the li elements to the ul in the nav-bar
document.querySelector('.nav-bar > ul').appendChild(liOne);
document.querySelector('.nav-bar > ul').appendChild(liTwo);
