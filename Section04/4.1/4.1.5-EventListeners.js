// add an event listener to the dog picture that listens for a "click" and gives an alert
document.querySelector('img').addEventListener('click', () => alert("Clicked the dog"));
// add an event listener to the list items in the class schedule that listens for a "mouseover" event and changes its background color
document.querySelector('#class-schedule-list').addEventListener('mouseover', (event) => (event.target.style.backgroundColor = 'red'));
// add an event listener to the whole page that listens for a "keydown" event and prints the key that was pressed
document.addEventListener('keydown', (event) => console.log(event.key));
