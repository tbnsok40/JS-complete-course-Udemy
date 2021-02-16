// const plusBtn = document.querySelector("#plus")
// const total = document.getElementById("total")
// const input = document.getElementById("input")


// plusBtn.addEventListener("click", updateDom)

// function updateDom(event) {
//     event.preventDefault

//     const todoDiv = document.createElement("li")
//     todoDiv.classList.add("one-component")

//     const completeBtn = document.createElement('button')
//     completeBtn.innerText = '<i class="fas fa-plus square"></i>'
//     todoDiv.appendChild(completeBtn)
//     total.appendChild(todoDiv)
//     // const plan = input.value;
//     // const element = document.createElement("li")
//     // element.classList.add("one-component")

//     // const trashBtn = document.createElement('span');
//     // trashBtn.innerHTML = "X"
//     // element.appendChild(trashBtn)

//     // element.innerHTML = `${plan} <input type = "checkbox"/>`
//     // total.appendChild(element)
// }

const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")
todoButton.addEventListener('click', addTodo)

function addTodo(event) {
    event.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)

    const completeBtn = document.createElement('button')
    completeBtn.innerHTML = '  <i class="fas fa-check"></i>' // innerText였으면 그냥 text만 들어간다
    completeBtn.classList.add('complete-btn');
    todoDiv.appendChild(completeBtn);


    const deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = '<i class="fas fa-trash trash-btn"></i>' // innerText였으면 그냥 text만 들어간다
    todoDiv.appendChild(deleteBtn);

    //Append todo list
    todoList.appendChild(todoDiv)
}



// 내가 해결 못한 부분 => 존재하지도 않는 delteBtn을 가져오려 하니 계속 null 에러 떴는데
// 그보다 상위 html을 긁어오면 됐다. 여기서는 deleteBtn을 내재하는 list
todoList.addEventListener("click", deleteBtn)

function deleteBtn(e) {
    const item = e.target;
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.remove();
    }

}