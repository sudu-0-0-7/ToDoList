var todos = [];
// localStorage.setItem('todos',1);
//localStorage.clear();

var localStoredVal = localStorage.getItem('todos');

console.log("localStoredVal ",localStoredVal)
if(localStoredVal){
todos = localStoredVal.split(',');
}
console.log("todos 5",todos)

// const db = {
// 	tasks: [1,2],
// 	completed: [3,4]
// };

// const db2 = [ 
// 	{ content: '1',done: false},
// 	{ content: '2',done: false},
// 	{ content: '3',done: true},
// 	{ content: '4',done: true},
// ];

var form = document.querySelector("#new-task-form");
var input = document.querySelector("#new-task-input");
var list_el = document.querySelector("#tasks");
var done_el = document.querySelector("#done");

todos.forEach(Element => {
	display(Element);
});

// Tak einput 
form.addEventListener('submit', (e) => {
	e.preventDefault();
	var task = input.value;

	console.log(task);

	if (input.value == "") {
		alert("Please Enter a task")
		return;
	}
	

		display(task);

		todos.push(task);
	console.log("tttt",todos)

	console.log("local storage",localStorage.setItem('todos', todos));

	input.value = '';


}
);


function display(task) {

	var task_el = document.createElement('div');
	task_el.classList.add('task');

	var task_content_el = document.createElement('div');
	task_content_el.classList.add('content');

	console.log(task_content_el);

	task_el.appendChild(task_content_el);

	var task_input_el = document.createElement('input');

	task_input_el.classList.add('text');
	task_input_el.type = 'text';
	task_input_el.value = task;
	task_input_el.setAttribute('readonly', 'readonly');

	task_content_el.appendChild(task_input_el);

	var task_actions_el = document.createElement('div');
	task_actions_el.classList.add('actions');
	
	var checkbox_el = document.createElement('input');
	//checkbox_el.setAttribute("type", "checkbox");
	checkbox_el.type = "checkbox";
	task_actions_el.appendChild(checkbox_el);


	var task_delete_el = document.createElement('button');
	task_delete_el.classList.add('delete');
	task_delete_el.innerText = 'Delete';

	task_actions_el.appendChild(task_delete_el);

	task_el.appendChild(task_actions_el);


	list_el.appendChild(task_el);

	task_delete_el.addEventListener('click', (e) => {
		console.log("dddddddddd",task);
		list_el.removeChild(task_el);

		const xyz = document.getElementById('tasks').getElementsByClassName('text');
		console.log("yyyyyyyyyy",xyz);
		console.log("xyzlength",xyz.length);
		console.log(typeof(xyz));
		console.log("yyyyyyyyyy",xyz);
		todos = [];
		for(var i=0 ; i< xyz.length ;i++)
		{
			console.log("valofi",xyz[i].value);
			todos.push(xyz[i].value);
		}

		console.log("yyyyyyyyyy",xyz);

	
		console.log("todosval",todos);
		localStorage.clear();
		localStorage.setItem('todos',JSON.stringify(todos));

		console.log("dddddddddd",task)


		

	});
	checkbox_el.addEventListener('change', function () {
		if (this.checked) {

			var tasks = task;

			var tasks_el = document.createElement('div');
			tasks_el.classList.add('tasks');

			var task_contents_el = document.createElement('div');
			task_contents_el.classList.add('content');

			tasks_el.appendChild(task_contents_el);
			var task_inputs_el = document.createElement('div');
			task_inputs_el.classList.add('text');
			task_inputs_el.type = 'text';
			task_inputs_el.value = tasks;
			task_inputs_el.setAttribute('readonly', 'readonly');
			task_contents_el.appendChild(task_inputs_el);

			var task_action_el = document.createElement('div');
			task_action_el.classList.add('actions');
			done_el.appendChild(task_el);
			task_content_el.classList.toggle('strikeThroughDone');
			localStorage.setItem('todos', todos);
		}
		else {
			task_actions_el.appendChild(task_delete_el);

			task_delete_el.addEventListener('click', (e) => {
				done_el.removeChild(task_el);
			});

			list_el.appendChild(task_el);
			task_content_el.classList.toggle('strikeThroughDone');
			

		}
	});


	

}
