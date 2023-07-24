const form = document.getElementById('form');
const input = document.getElementById('input');
const todos = document.getElementById('todos');    

form.addEventListener("submit", (e) => {
    e.preventDefault();
    addTodo();
});


function addTodo() {
    const todoText = input.value;
    if (todoText) {
        const todoEL = document.createElement
        ("li");
        todoEL.innerText = todoText;

        todoEL.addEventListener('click', () => {
            todoEL.classList.toggle('completed');
            updateLs();

        });
        todoEL.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            todoEL.remove();
            updateLs();

        })
        todos.appendChild(todoEL);
        input.value = "";

        updateLs();

    }
}
function updateLs() {
    const todosEl = document.querySelectorAll("li");
    const todos = [];

    todosEl.forEach((todosEl) => {
        todos.push({
            Text: todosEl.innerText,
            completed: todosEl.classList.contains("completed"),
        });
    });

    localStorage.setItem("todos", JSON.stringify(todos));
}
