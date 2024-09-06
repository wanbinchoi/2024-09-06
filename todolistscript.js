document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('add-todo');
    const taskInput = document.getElementById('todo-input');
    const taskList = document.getElementById('todo-list');

    // 일정 추가
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('일정을 추가해주세요.');
            return;
        }

        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" class="task-checkbox">
            <span class="task-text">${taskText}</span>
            <button class="delete">Delete</button>
        `;

        // 완료 체크박스
        li.querySelector('.task-checkbox').addEventListener('click', (event) => {
            const checkbox = event.target;
            const taskTextElement = checkbox.nextElementSibling;
            if (checkbox.checked) {
                taskTextElement.classList.add('completed');
            } else {
                taskTextElement.classList.remove('completed');
            }
        });

        // 삭제 버튼
        li.querySelector('.delete').addEventListener('click', () => {
            taskList.removeChild(li);
        });

        taskList.appendChild(li);
        taskInput.value = '';
        taskInput.focus();
    }
    addTaskButton.addEventListener('click', addTask);
});
