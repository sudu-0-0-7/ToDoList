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

var form = document.querySelector("#NewTaskForm");
var input = document.querySelector("#NewTaskInput");
var listElement = document.querySelector("#Tasks");
var doneElement = document.querySelector("#Done");

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

	var taskElement = document.createElement('div');
	taskElement.classList.add('task');

	var taskContentElement = document.createElement('div');
	taskContentElement.classList.add('content');

	console.log(taskContentElement);

	taskElement.appendChild(taskContentElement);

	var taskInputElement = document.createElement('input');

	taskInputElement.classList.add('text');
	taskInputElement.type = 'text';
	taskInputElement.value = task;
	taskInputElement.setAttribute('readonly', 'readonly');

	taskContentElement.appendChild(taskInputElement);

	var taskActionsElement = document.createElement('div');
	taskActionsElement.classList.add('actions');
	
	var checkboxElement = document.createElement('input');
	//checkbox_el.setAttribute("type", "checkbox");
	checkboxElement.type = "checkbox";
	taskActionsElement.appendChild(checkboxElement);


	var taskDeleteElement = document.createElement('button');
	taskDeleteElement.classList.add('delete');
	taskDeleteElement.innerText = 'Delete';

	taskActionsElement.appendChild(taskDeleteElement);

	taskElement.appendChild(taskActionsElement);


	listElement.appendChild(taskElement);

	taskDeleteElement.addEventListener('click', (e) => {
		console.log("dddddddddd",task);
		listElement.removeChild(taskElement);

		const remainingTexts = document.getElementById('Tasks').getElementsByClassName('text');
		console.log("yyyyyyyyyy",remainingTexts);
		console.log("xyzlength",remainingTexts.length);
		console.log(typeof(remainingTexts));
		console.log("yyyyyyyyyy",remainingTexts);
		todos = [];
		for(var i=0 ; i< remainingTexts.length ;i++)
		{
			console.log("valofi",remainingTexts[i].value);
			todos.push(remainingTexts[i].value);
		}

		console.log("yyyyyyyyyy",remainingTexts);

	
		console.log("todosval",todos);
		localStorage.clear();
		localStorage.setItem('todos',todos);

		console.log("dddddddddd",task)


		

	});
	checkboxElement.addEventListener('change', function () {
		if (this.checked) {

			var tasks = task;

			var tasksElement = document.createElement('div');
			tasksElement.classList.add('tasks');

			var taskContentsElement = document.createElement('div');
			taskContentsElement.classList.add('content');

			tasksElement.appendChild(taskContentsElement);
			var taskInputsElement = document.createElement('div');
			taskInputsElement.classList.add('text');
			taskInputsElement.type = 'text';
			taskInputsElement.value = tasks;
			taskInputsElement.setAttribute('readonly', 'readonly');
			taskContentsElement.appendChild(taskInputsElement);

			var taskActionElement = document.createElement('div');
			taskActionElement.classList.add('actions');
			doneElement.appendChild(taskElement);
			taskContentElement.classList.toggle('strikeThroughDone');
			localStorage.setItem('todos', todos);
		}
		else {
			taskActionsElement.appendChild(taskDeleteElement);

			taskDeleteElement.addEventListener('click', (e) => {
				doneElement.removeChild(taskElement);
			});

			listElement.appendChild(taskElement);
			taskContentElement.classList.toggle('strikeThroughDone');
			

		}
	});


	

}