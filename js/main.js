var addTask       = document.getElementById('add-task'),
		input         = document.querySelector('.todo-go__input'),
		listWrap      = document.querySelector('.todo-list'),
		allTaskInfo   = document.querySelector('.todo-info__all'),
		checkTaskInfo = document.querySelector('.todo-info__check'),
		listArr       = document.getElementsByClassName('todo-list__task'),
		checkTask     = document.getElementsByClassName('check-task');

addTask.addEventListener('click', (event) => {

	// Считаем кол-во задач
	allTaskInfo.textContent = 'Всего задач: ' + (listArr.length + 1);
	
	


	if(input.value == '') {
		alert('Введите свою задачу');
	} else {

		var newTask = document.createElement('div');
		newTask.classList.add('todo-list__task');
		newTask.innerHTML = '<span>* ' + input.value + '</span>';
		listWrap.insertBefore(newTask, listWrap.firstChild);
		input.value = '';


		//Создадим кнопку выполненно 
		var checkBtn = document.createElement('div');
		checkBtn.classList.add('check');
		checkBtn.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
		newTask.insertBefore(checkBtn, newTask.lastChild);

		checkBtn.addEventListener('click', () => {
			newTask.classList.toggle('line-through');
			newTask.classList.toggle('check-task'); // сортируем
			checkTaskInfo.textContent = 'Задач выполненно: ' + checkTask.length;
			
			
		});

		


		//Создадим кнопку удалить 
		var delBtn = document.createElement('div');
		delBtn.classList.add('del');
		delBtn.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
		newTask.insertBefore(delBtn, newTask.lastChild);

		delBtn.addEventListener('click', (event) => {
			newTask.parentNode.removeChild(newTask);
			allTaskInfo.textContent = 'Всего задач: ' + listArr.length;
			checkTaskInfo.textContent = 'Задач выполненно: ' + checkTask.length;
		});



		


	}

	

});