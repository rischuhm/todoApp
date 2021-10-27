function createListItem(itemText){
    // create list item and set class
    li = document.createElement("li");
    li.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
    
    // create span element for the content and append it to the list item
    content = document.createElement("span");
    content.innerText= itemText;
    li.appendChild(content);

    // create the delete button, set class and append it to the list item
    button = document.createElement("button");
    button.setAttribute("class","btn btn-outline-danger");
    button.setAttribute("type","button");
    button.setAttribute("onclick","deleteItem(event)");
    button.innerText = "X";
    li.appendChild(button);

    return li
};


function saveList(){
    listItems = Array.from(document.getElementsByTagName("li"));
    var todos = [];
    for (item of listItems){
        todos.push(item.querySelector("span").innerText)
    }

    // localStorage saves list of items in browser storage -preferred way to using cookies
    localStorage.setItem("items", JSON.stringify(todos));
}


function addItem(event){

    // get list from the DOM by tagname
    liste = document.getElementsByTagName("ul")[0];

    // get the input field's value by using the click event's target and look for previous sibling's value  
    inputTextField = event.target.previousElementSibling;
    inputText = inputTextField.value;
    
    li = createListItem(inputText)

    // append list item to list
    liste.appendChild(li);

    // Reset Input value
    inputTextField.value = "";

    saveList();

}


function deleteItem(event){
    event.target.parentElement.remove();
    saveList();
}



// Renders items from localStorage into list whenever page loads
window.onload = function(){
    listItems = JSON.parse(localStorage.getItem("items"));
    liste = document.getElementsByTagName("ul")[0];


    for (item of listItems){ 
        li = createListItem(item)
        liste.appendChild(li);
    }


}