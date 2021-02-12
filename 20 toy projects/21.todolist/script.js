const plusBtn = document.querySelector("#plus")
const total = document.getElementById("total")
const input = document.getElementById("input")


plusBtn.addEventListener("click", updateDom)

function updateDom(event) {
    event.preventDefault

    const todoDiv = document.createElement("li")
    todoDiv.classList.add("one-component")

    const completeBtn = document.createElement('button')
    completeBtn.innerText = '<i class="fas fa-plus square"></i>'
    todoDiv.appendChild(completeBtn)
    total.appendChild(todoDiv)
    // const plan = input.value;
    // const element = document.createElement("li")
    // element.classList.add("one-component")

    // const trashBtn = document.createElement('span');
    // trashBtn.innerHTML = "X"
    // element.appendChild(trashBtn)

    // element.innerHTML = `${plan} <input type = "checkbox"/>`
    // total.appendChild(element)
}
