function addTask() {
    let input = document.getElementById("todoInput");
    let list = document.getElementById("todoList");

    if (input.value.trim() === "") {
        alert("You must write something!");
        return;
    }

    // 1. Create the <li>
    let li = document.createElement("li");
    li.textContent = input.value;

    // 2. Create the Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.onclick = function() {
        list.removeChild(li);
    };

    // 3. Put them together
    li.appendChild(deleteBtn);
    list.appendChild(li);

    // 4. Clear the input for the next task
    input.value = "";
}