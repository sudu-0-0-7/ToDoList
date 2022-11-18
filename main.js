//window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");
	const done_el = document.querySelector("#done");


	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

        if(input.value=="")
        {
            alert("Please Enter a task")
        }
        else{
console.log(task);
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
console.log(task_input_el);
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

		// checkbox_el.addEventListener('click',function(){
			
		// task_content_el.appendChild(task_contents_el);
	 	// task_el.removeChild();


		//  })	;


		checkbox_el.addEventListener('click',function(){
	 	task_content_el.classList.toggle('strikeThroughDone');



		const tasks = task;
		console.log(tasks);
		const tasks_el = document.createElement('div');
		 tasks_el.classList.add('tasks');
 
		 const task_contents_el = document.createElement('div');
		task_contents_el.classList.add('content');
 console.log(tasks);
 console.log(task_contents_el);
 //list_el.removeChild(task_el);

		 tasks_el.appendChild(task_contents_el);
		 

		 const task_input_el = document.createElement('input');
	
		 task_input_el.classList.add('text');
		 task_input_el.type = 'text';
		 task_input_el.value = tasks;
		 task_input_el.setAttribute('readonly', 'readonly');
 console.log(task_input_el);
		 task_contents_el.appendChild(task_input_el);
		 console.log(task_input_el);


		const task_action_el = document.createElement('div');
		 task_action_el.classList.add('actions');
		console.log(task);

		 
		});








		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
    }
	   

	});

//});