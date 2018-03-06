var todos = [];

var input = prompt("What would you like to do?");

while (input !== "quit") {
    if (input === "list") {
        listItems();
    } else if (input === "add") {
        addItem();
    } else if (input === "delete") {
        deleteItem();
    }
    var input = prompt("What would you like to do?");
}
console.log("To Do list has quit.");

function listItems() {
    todos.forEach(function (items, i) {
        console.log("**************");
        console.log(i + ": " + items);
    })
    console.log("**************");
}

function addItem() {
    var newItem = prompt("Enter your To Do,");
    todos.push(newItem);
    console.log(newItem + " added to list.");
}

function deleteItem() {
    var deleteToDo = prompt("Which item would you like to delete?.");
    todos.splice(deleteToDo, 1);
    console.log(deleteToDo + " deleted.");
}