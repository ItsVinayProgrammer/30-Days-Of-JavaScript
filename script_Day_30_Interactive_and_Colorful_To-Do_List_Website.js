// script.js
document.getElementById('todo-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const todoInput = document.getElementById('todo-input');
    const todoDatetime = document.getElementById('todo-datetime');
    const todoList = document.getElementById('todo-list');
  
    if (todoInput.value.trim() !== '') {
      const todoItem = document.createElement('li');
      const taskName = document.createElement('span');
      taskName.textContent = todoInput.value.trim();
      const taskDatetime = document.createElement('span');
      taskDatetime.textContent = formatDatetime(todoDatetime.value);
      const notesInput = document.createElement('textarea');
      notesInput.placeholder = 'Add notes...';
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      const editDatetimeBtn = document.createElement('button');
      editDatetimeBtn.textContent = 'Edit';
  
      todoItem.appendChild(taskName);
      todoItem.appendChild(taskDatetime);
      todoItem.appendChild(notesInput);
      todoItem.appendChild(deleteBtn);
      todoItem.appendChild(editDatetimeBtn);
      todoList.appendChild(todoItem);
  
      todoInput.value = '';
      todoDatetime.value = '';
  
      deleteBtn.addEventListener('click', function() {
        todoItem.remove();
        saveToLocalStorage();
      });
  
      todoItem.addEventListener('click', function() {
        todoItem.classList.toggle('completed');
        saveToLocalStorage();
      });
  
      taskName.addEventListener('click', function() {
        const newText = prompt('Edit the task:', taskName.textContent);
        if (newText !== null && newText.trim() !== '') {
          taskName.textContent = newText.trim();
          saveToLocalStorage();
        }
      });
  
      editDatetimeBtn.addEventListener('click', function() {
        const newDatetime = prompt('Edit the date and time:', taskDatetime.textContent);
        if (newDatetime !== null && newDatetime.trim() !== '') {
          taskDatetime.textContent = newDatetime.trim();
          saveToLocalStorage();
        }
      });
  
      notesInput.addEventListener('input', function() {
        saveToLocalStorage();
      });
  
      saveToLocalStorage();
    }
  });
  
  document.getElementById('clear-btn').addEventListener('click', function() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
    saveToLocalStorage();
  });
  
  function saveToLocalStorage() {
    const todoItems = [];
    const todos = document.querySelectorAll('li');
    todos.forEach(function(todo) {
      const taskName = todo.querySelector('span:first-child').textContent;
      const taskDatetime = todo.querySelector('span:nth-child(2)').textContent;
      const notesInput = todo.querySelector('textarea').value;
      todoItems.push({ name: taskName, datetime: taskDatetime, notes: notesInput });
    });
    localStorage.setItem('todos', JSON.stringify(todoItems));
  }
  
  function loadFromLocalStorage() {
    const todoItems = JSON.parse(localStorage.getItem('todos'));
    if (todoItems) {
      todoItems.forEach(function(todo) {
        const todoItem = document.createElement('li');
        const taskName = document.createElement('span');
        taskName.textContent = todo.name;
        const taskDatetime = document.createElement('span');
        taskDatetime.textContent = todo.datetime;
        const notesInput = document.createElement('textarea');
        notesInput.value = todo.notes;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        const editDatetimeBtn = document.createElement('button');
        editDatetimeBtn.textContent = 'Edit';
  
        todoItem.appendChild(taskName);
        todoItem.appendChild(taskDatetime);
        todoItem.appendChild(notesInput);
        todoItem.appendChild(deleteBtn);
        todoItem.appendChild(editDatetimeBtn);
        todoList.appendChild(todoItem);
  
        deleteBtn.addEventListener('click', function() {
          todoItem.remove();
          saveToLocalStorage();
        });
  
        todoItem.addEventListener('click', function() {
          todoItem.classList.toggle('completed');
          saveToLocalStorage();
        });
  
        taskName.addEventListener('click', function() {
          const newText = prompt('Edit the task:', taskName.textContent);
          if (newText !== null && newText.trim() !== '') {
            taskName.textContent = newText.trim();
            saveToLocalStorage();
          }
        });
  
        editDatetimeBtn.addEventListener('click', function() {
          const newDatetime = prompt('Edit the date and time:', taskDatetime.textContent);
          if (newDatetime !== null && newDatetime.trim() !== '') {
            taskDatetime.textContent = newDatetime.trim();
            saveToLocalStorage();
          }
        });
  
        notesInput.addEventListener('input', function() {
          saveToLocalStorage();
        });
      });
    }
  }
  
  function formatDatetime(datetime) {
    const dateObj = new Date(datetime);
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    };
    return dateObj.toLocaleDateString('en-US', options);
  }
  
  document.addEventListener('DOMContentLoaded', loadFromLocalStorage);
  