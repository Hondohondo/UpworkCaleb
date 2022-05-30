console.log("Hello world");
var addMoreInput = document.getElementById("add-more");
console.log(addMoreInput);
var addListItem = addMoreInput.value;
// var addListItem = document.getElementById("add-more").value;
console.log(addListItem);
console.log("----")

var listItem = document.getElementsByTagName("li");
// addMoreInput.val
console.log(listItem);

listItem.textContent = addMoreInput.value;



function addMore111() {

    var listItem = document.getElementsByTagName("li");
    var para = document.getElementById("more-para");
    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var three = document.getElementById("three");
    // addMoreInput.val
    console.log(listItem);

    listItem.textContent = addMoreInput.value;
    listItem.innerHTML = addMoreInput.value;
    listItem.innerText = addMoreInput.value;
    listItem.innerText = "Now...";

    one.innerText = "One";
    two.textContent = "Two";
    three.innerHTML = "Three";

    // para.innerText = "It works";

    para.innerText = addMoreInput.value;

}

// addMoreInput.addEventListener('input', addMore);


var entries = [];
console.log(entries);
entries.push('One');
console.log(entries);
entries.push('Two');
entries.push('Four');
console.log(entries)

function addData(){
    const paragraph = document.createElement('p');
    paragraph.textContent = "I'm a brand new paragraph.";
    console.log(paragraph)

    let addMoreInput = document.querySelector('.add-more-input').value;

    const todoList = document.querySelector('ul');
    const newTodo = document.createElement('li');
    const newBtn = document.createElement('button');
    // newTodo.textContent = 'Do homework';
    newTodo.textContent = addMoreInput;
    newBtn.textContent = 'Delete Me';

    // Add new to-do to the end of the list
    todoList.appendChild(newTodo);
    todoList.appendChild(newBtn);
}

document.querySelector('.btn').addEventListener('click', addData);


function deleteData() {

    const todoList = document.querySelector('ul');
    todoList.removeChild(todoList.lastElementChild);

}

// document.querySelector('.btn-delete').addEventListener('click', deleteData);
document.querySelector('button').addEventListener('click', deleteData);



function  addEntries() {
    // var entries = [];
    let containerElement;
    let newHtml;
    let html;

    // containerElement = '.add-more-container';
    // containerElement = document.querySelector('.add-more-container').value;
    containerElement = document.querySelector('.add-more-container');
    // html ='<p><strong>%placeholder%</strong></p>';
    // newHtml = html.replace('%placeholder', entries.push(addMoreInput));

    console.log("New Html below");


    let addMoreInput = document.querySelector('.add-more-input').value;
    console.log(addMoreInput);
    // html ='<p class="span-add-more"><strong>%placeholder%</strong><ion-icon class="ion-icon" id="ionicon" name="close-circle-outline" ></ion-icon></p>';
    // html ='<p class="span-add-more">%placeholder%<ion-icon class="ion-icon" id="ionicon" name="close-circle-outline" ></ion-icon></p>';
    html ='<p class="span-add-more" id="add-more-para">%placeholder%</p>';
    newHtml = html.replace('%placeholder%', addMoreInput);
    console.log(newHtml);


    //Insert the HTML into the DOM
    // document.querySelector(containerElement).insertAdjacentElement('beforeend', <p>Test</p>);
    // containerElement.insertAdjacentElement('beforeend', html);
    // containerElement.insertAdjacentHTML('beforeend', html);
    containerElement.insertAdjacentHTML('beforeend', newHtml);

    function removePara() {
        para = document.querySelector('.span-add-more');
        para.innerHTML = "...";
        newHtml = " ";
        console.log("function works");
        newHtml.textContent ="Nandi";
    }
    document.querySelector('.span-add-more').addEventListener('click', removePara);

    /*

        const h2 = document.getElementById("myH2");
        let html = "<p>My new paragraph.</p>";
        h2.insertAdjacentHTML("afterend", html);*/
    /*   var ionicon = document.getElementById('ionicon');

       function removeParentElement() {
           // event.target.parentElement.remove();
           this.parentElement.remove();
       }


       ionicon.addEventListener('click', removeParentElement);*/
    /* var node = document.getElementById('ionicon');

     function removeNode() {
         if (node.parentNode) {
             // remove a node from the tree, unless
             // it's not in the tree already
             node.parentNode.removeChild(node);
         }

     }
     node.addEventListener('click', removeNode);*/




}




document.querySelector('.btn').addEventListener('click', addEntries);

/*function removePara2() {
    para = document.querySelector('#span-add-more');
    para.innerHTML = " ";
    newHtml = " ";
    console.log("function works...");
    newHtml.textContent ="Nandi...";
}
document.querySelector('#span-add-more').addEventListener('click', removePara2);*/


/*
function remove(el) {
    var element = el;
    element.remove();
}
*/
