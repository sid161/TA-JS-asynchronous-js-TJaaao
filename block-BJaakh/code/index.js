var form = document.getElementById('form');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

form.addEventListener('submit', addItem);

// delete event
itemList.addEventListener('click', removeItem);

// filter event
filter.addEventListener('keyUp', filterItems);

function removeItem(event){
    event.preventDefault();
    if(event.target.classList.contains('delete')){
        if(confirm('you sure?')){
            var li = event.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// function filterItems
function filterItems(event){
    event.preventDefault();
    var text = e.target.value.toLowerCase(); // to lower case
    var items = itemList.getElementsByTagName('li');// get list
    Array.from(items).forEach((item) => {
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!= -1){
            item.style.display = 'block';
        } else{
            item.style.display = 'none';
        }
    })               // convert to array
}

function addItem(event){
    event.preventDefault();
    // get input value
    var newItem  =  document.getElementById('item').value;

    // create li
    var li = document.createElement('li');
    // add class
    li.className = "list-group-item";

    // add text node with input
    li.appendChild(document.createTextNode(newItem));

    // create delete button element
    var deleteBtn = document.createElement('button');

    // Add clases to del butn
    deleteBtn.className = "btn btn-danger btn-sm  delete";

    deleteBtn.appendChild(document.createTextNode("X"));

    li.appendChild(deleteBtn); // append button to li

    itemList.appendChild(li); // append button 
}
