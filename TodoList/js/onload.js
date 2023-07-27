window.onload = function(){

    const todoList = document.getElementById('todoList');
    const inputTodo = document.getElementsByClassName('form-control')[0];
    const btnAdd = document.getElementById('btnAdd');
    
    
    btnAdd.addEventListener('click', function(e){
        let todoValue = inputTodo.value;
        if(todoValue == ""){
            alert('할일을 입력하세요.');
            return;
        }   
        const listltem = document.createElement('li');
        listltem.className = 'd-flex list-group-item';
        listltem.innerText = todoValue;
    
        const listBtn = document.createElement('button');
        listBtn.className = 'btn-close ms-auto';
        listBtn.onclick = function(e){
            let pNode = e.target.parentNode;
            todoList.removeChild(listltem);
    
        }
    
        listltem.appendChild(listBtn);
        todoList.appendChild(listltem);
        
        
    
        inputTodo.value = "";
        });
};