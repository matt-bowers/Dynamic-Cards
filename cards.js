
let cardArea = document.getElementById('cards');
let input = document.getElementById('cardText');

// When the user enters in text into the text area and then clicks the create button
// create a new card element in the DOM 
function addCard() {
    // create a new card element with user input, add delete button
    let newButton = "<button id ='delete'>Delete</button>";
    let newCard = "<article id ='card'><h3>"+input.value+"</h3>"+newButton+"</article>"
    // add to DOM if valid
    if(input.value == ""){
        alert("A blank card is a sad card :( give it a name!");
    } else {
        cardArea.innerHTML += newCard;
    }
}

// Get a reference to the create button in the DOM
let createBtn = document.getElementById('cardBtn');
// Assign the addCard function to the create button when clicked
createBtn.addEventListener('click', addCard);

// When the user clicks a Delete button, the containing card is removed
cardArea.addEventListener('click', function(){
    if (event.target.id === "delete"){
        event.target.parentElement.parentElement.removeChild(event.target.parentElement);
    }
});

// Get a reference to the text input element in the DOM
// Assign a function to be executed if the user presses Enter
input.addEventListener('keyup', function(e){
    if (e.keyCode === 13){
        createBtn.click();
        input.value = "";
    }
});
