

/*---------------
*
* --------------*/
let input = document.getElementById('input');
let wrapper = document.getElementById('divWrapper');
// let button = document.getElementById('btn');



function workSomething() {
    // const todoList = document.querySelector('.wrapper');
    const body = document.querySelector('.body');

    const todoList = document.createElement('p');
    todoList.classList.add("para-flex");
    console.log("New Div" + todoList);
    console.log(todoList);
    body.append(todoList);
    const newTodo = document.createElement('span');
    // newTodo.textContent = 'Do homework';
    newTodo.textContent = input.value;
    newTodo.classList.add("delete");

    // Add new to-do to the end of the list
    todoList.appendChild(newTodo);
    input.value = " ";
    input.placeholder = "Add Now";

    ///

    function removeParentElement() {
        // event.target.parentElement.remove();
        this.parentElement.remove();
        console.log("para clicked");
    }

    // todoList.addEventListener('click', removeParentElement);
    newTodo.addEventListener('click', removeParentElement);
}

// button.addEventListener('click',workSomething);
input.addEventListener('change',workSomething);

// const ionicon = document.getElementById('ionicon');
const ionIcon = document.getElementsByTagName('p');

let button1 = document.getElementById('btn1');

function removeParentElement() {
    // event.target.parentElement.remove();
    this.parentElement.remove();
    console.log("para clicked");
}


// ionIcon.addEventListener('click', removeParentElement);
// button1.addEventListener('click', removeParentElement);





