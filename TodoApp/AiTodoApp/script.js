// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const todoInput = document.getElementById('todoInput');
    const addBtn = document.getElementById('addBtn');
    const todoList = document.getElementById('todoList');
    const totalTodos = document.getElementById('totalTodos');
    const clearCompletedBtn = document.getElementById('clearCompleted');
    
    // Initial state (empty array)
    let todos = [];
    
    // Load from localStorage if available
    loadTodos();
    
    // 1. Add Todo Function
    addBtn.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') addTodo();
    });
    
    function addTodo() {
        const text = todoInput.value.trim();
        if (text === '') return;
        
        const newTodo = {
            id: Date.now(), // Simple unique ID
            text: text,
            completed: false,
            createdAt: new Date().toLocaleDateString()
        };
        
        todos.push(newTodo);
        saveTodos();
        renderTodos();
        
        // Clear input
        todoInput.value = '';
        todoInput.focus();
    }
    
    // 2. Render Todos Function
    function renderTodos() {
        // Clear list first
        todoList.innerHTML = '';
        
        // Create HTML for each todo
        todos.forEach(todo => {
            const li = document.createElement('li');
            li.className = todo.completed ? 'completed' : '';
            li.setAttribute('data-id', todo.id);
            
            li.innerHTML = `
                <input type="checkbox" class="toggle" ${todo.completed ? 'checked' : ''}>
                <span class="text">${todo.text}</span>
                <button class="delete">×</button>
            `;
            
            todoList.appendChild(li);
        });
        
        // Update stats
        updateStats();
    }
    
    // 3. Update Stats
    function updateStats() {
        const total = todos.length;
        const completed = todos.filter(todo => todo.completed).length;
        totalTodos.textContent = `${completed}/${total} completed`;
    }
    
    // 4. Event Delegation for Dynamic Elements
    todoList.addEventListener('click', function(e) {
        const todoId = parseInt(e.target.closest('li').getAttribute('data-id'));
        
        // Toggle completion (checkbox click)
        if (e.target.classList.contains('toggle')) {
            toggleTodo(todoId);
        }
        
        // Delete todo (× button click)
        if (e.target.classList.contains('delete')) {
            deleteTodo(todoId);
        }
    });
    
    // 5. Toggle Todo Completion
    function toggleTodo(id) {
        todos = todos.map(todo => 
            todo.id === id ? {...todo, completed: !todo.completed} : todo
        );
        saveTodos();
        renderTodos();
    }
    
    // 6. Delete Todo
    function deleteTodo(id) {
        todos = todos.filter(todo => todo.id !== id);
        saveTodos();
        renderTodos();
    }
    
    // 7. Clear All Completed
    clearCompletedBtn.addEventListener('click', function() {
        todos = todos.filter(todo => !todo.completed);
        saveTodos();
        renderTodos();
    });
    
    // 8. Save to localStorage
    function saveTodos() {
        localStorage.setItem('todos', JSON.stringify(todos));
    }
    
    // 9. Load from localStorage
    function loadTodos() {
        const saved = localStorage.getItem('todos');
        if (saved) {
            todos = JSON.parse(saved);
            renderTodos();
        }
    }
});