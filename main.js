const todos=[];
console.log("line 3",typeof(todos));

console.log("text",localStorage.getItem('todos'));

	//todos.push(localStorage.getItem('todos').split(','));
	console.log("line 12",typeof(todos));

	console.log("todos value",todos)
	console.log("ToDo list",typeof(todos));
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");
	const done_el = document.querySelector("#done");

	
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const 
		 task = input.value;
		
		console.log(task);

        if(input.value=="")
        {
            alert("Please Enter a task")
			return;
        }

//console.log(typeof(task));
			todos.push(task);
// console.log("Array",todos);
// console.log(typeof(todos));
		localStorage.setItem('todos', todos);

		const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		console.log(task_content_el);

		task_el.appendChild(task_content_el);
        
		const task_input_el = document.createElement('input');
		
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
        const checkbox_el = document.createElement('input');
        //checkbox_el.setAttribute("type", "checkbox");
		checkbox_el.type="checkbox";
        task_actions_el.appendChild(checkbox_el);
         
		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';
 
        task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';
		 

		checkbox_el.addEventListener('change', function() {
		if(this.checked)
		{

			const tasks = task;

			const tasks_el = document.createElement('div');
			 tasks_el.classList.add('tasks');
		
			 const task_contents_el = document.createElement('div');
			task_contents_el.classList.add('content');
		
			 tasks_el.appendChild(task_contents_el);
			 const task_inputs_el = document.createElement('div');
			 task_inputs_el.classList.add('text');
			 task_inputs_el.type = 'text';
			 task_inputs_el.value = tasks;
			 task_inputs_el.setAttribute('readonly', 'readonly');
			 task_contents_el.appendChild(task_inputs_el);		
		
			const task_action_el = document.createElement('div');
			task_action_el.classList.add('actions');
				done_el.appendChild(task_el);
				task_content_el.classList.toggle('strikeThroughDone');
		}
		else
		{
			task_actions_el.appendChild(task_delete_el);

			task_delete_el.addEventListener('click', (e) => {
				done_el.removeChild(task_el);
		});
			
				list_el.appendChild(task_el);
			task_content_el.classList.toggle('strikeThroughDone');
			
		}
	});	
		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
	});
    }
	);
