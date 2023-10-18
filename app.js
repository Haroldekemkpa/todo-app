const element = {
    todoForm: document.querySelector('#new-task-form'),
    todoInput: document.querySelector('#new-task-input'),
    todolistElement: document.querySelector('#tasks'),
    todoTasks: document.querySelector('.tasks'),
    btnEdit: document.querySelector('.edit'),
    btnDelete: document.querySelector('.delete')
}

window.addEventListener('load', () => {
    const form = element.todoForm;
    const input = element.todoInput;
    const listElement = element.todolistElement;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        if (!task) {
            alert('please fill out the task');
        } else {
            const markUp = `
                <div class="task">
                    <div class="content">
                        <input type="text"
                            class= "text"
                            value="${task} "
                            readonly
                        />
                    </div>

                    <div class="action">
                        <button class="edit">Edit</button>
                        <button class="delete">Delete</button>
                    </div>
                </div>
            `;   
             
            input.value = " ";
            element.todoInput.blur();
            element.todolistElement.insertAdjacentHTML('beforeend', markUp);
        }

        element.btnEdit.addEventListener('click', () => {
            if(element.btnEdit.innerText.toLowercase() === 'Edit') {
                todoTasks.removeAttribute('readonly');
                todoTasks.focus();
                btnEdit.innerHtml.toLowercase = "save"
            }
        })
        

    })
})