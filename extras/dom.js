let input = document.getElementById('input');
console.log("INPUT........INPUT");
console.log(input);
console.log(input.value);
console.log(input.innerHTML);
console.log(input.innerText);


let wrapper = document.getElementById('divWrapper');
console.log("WRAPPER........WRAPPER");
console.log(wrapper);
console.log(wrapper.value);
console.log("Inner HTML...");
console.log(wrapper.innerHTML);
console.log("Inner Text...");
console.log(wrapper.innerText);

let button = document.getElementById('btn');
console.log("BUTTON........BUTTON");
console.log(button);
console.log(button.value);
console.log("Inner HTML...");
console.log(button.innerHTML);
console.log("Inner Text...");
console.log(button.innerText);


function doSomething() {
    // wrapper.appendChild('Test');
    // wrapper.appendChild('...');
    let wrapper = document.createElement('div');
    let paragraph = document.createElement('p');
    paragraph.textContent = "I'm a brand new paragraph.";
    console.log(paragraph);

    // paragraph.textContent = input.value;

    // paragraph.appendChild(input.value);
    // paragraph.appendChild(paragraph);
    wrapper.appendChild(paragraph);
    console.log(wrapper);


}

// button.addEventListener('click',doSomething);


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
   button1.addEventListener('click', removeParentElement);

// onclick="BoldText(this);"
   /*
   *
   * */
var currElem = null; //will hold the element that is bold now

function BoldText(elem) {

    if (elem != currElem) { //do thing if you're clicking on a bold link

        if (currElem) //if a link bold right now unbold it

            currElem.style.fontWeight='normal';

        currElem = elem; //assign this element as the current one

        elem.style.fontWeight='bold';  //make the element clicked bold

    }

}




