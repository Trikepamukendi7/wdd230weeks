const input = document.querySelector(".fav-ch");
const button = document.querySelector(".add-ch");
const list = document.querySelector(".list");

button.addEventListener('click', function() { 

    const newList = document.createElement("li");
    const listText = document.createTextNode(input.value);
    const deleteButton = document.createElement("button");

    newList.appendChild(listText);
    list.appendChild(newList);
    newList.appendChild(deleteButton);
    deleteButton.textContent="❌";
    list.appendChild(newList);

    deleteButton.addEventListener('click', function() {
        list.removeChild(newList); })

    document.querySelector('input').value = '';

})
