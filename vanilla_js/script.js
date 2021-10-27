function addItem(event){

    // get list from the DOM by tagname
    liste = document.getElementsByTagName("ul")[0];

    // get the input field's value by using the click event's target and look for previous sibling's value  
    inputTextField = event.target.previousElementSibling;
    inputText = inputTextField.value;
    
    // create list item and set class
    li = document.createElement("li");
    li.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
    
    // create span element for the content and append it to the list item
    content = document.createElement("span");
    content.innerText= inputText;
    li.appendChild(content);

    // create the delete button, set class and append it to the list item
    button = document.createElement("button");
    button.setAttribute("class","btn btn-outline-danger");
    button.setAttribute("type","button");
    button.setAttribute("onclick","deleteItem(event)");
    button.innerText = "X";
    li.appendChild(button);


    // append list item to list
    liste.appendChild(li);

    // Reset Input value
    inputTextField.value = "";
}


function deleteItem(event){
    event.target.parentElement.remove();
}