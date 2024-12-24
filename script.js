let shoppingList = [];

const addButton = document.getElementById("add-button");
const inputField = document.getElementById("text-field");

addButton.addEventListener('click', (event) => {
    event.preventDefault();

    //const itemText = inputField.value.trim();
    const itemText = inputField;

    if(itemText.value === ''){
       return;
    }
    shoppingList.push(itemText.value)
    
    itemText.value = ""
    
    console.log(shoppingList)
})

