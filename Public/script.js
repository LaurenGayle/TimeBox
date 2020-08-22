// client-side js, loaded by index.html
// run by the browser each time the page is loaded

console.log("hello world :o");

// define variables that reference elements on our page
const dreamsList = document.getElementById("tasks");
const dreamsForm = document.querySelector("form");

// a helper function that creates a list item for a given task
function appendNewTask(task) {
  const newListItem = document.createElement("li");
  newListItem.innerText = task;
  dreamsList.appendChild(newListItem);
}

// fetch the initial list of tasks
fetch("/tasks")
  .then(response => response.json()) // parse the JSON from the server
  .then(tasks => {
    // remove the loading text
    dreamsList.firstElementChild.remove();

    // iterate through every task and add it to our page
    tasks.forEach(appendNewTask);

    // listen for the form to be submitted and add a new task when it is
    dreamsForm.addEventListener("submit", event => {
      // stop our form submission from refreshing the page
      event.preventDefault();

      // get task value and add it to the list
      let newTask = dreamsForm.elements.task.value;
      tasks.push(newTask);
      appendNewTask(newTask);

      // reset form
      dreamsForm.reset();
      dreamsForm.elements.task.focus();
    });
  });

/*function myCreateFunction() {
  var table = document.getElementById("myTable");
  var row = table.insertRow(11);
  var cell1 = row.insertCell(11);
  var cell2 = row.insertCell(12);
  var cell3 = row.insertCell(13);
  cell1.innerHTML = "INPUT";
  cell2.innerHTML = "INPUT";
  cell3.innerHTML = "INPUT";

}*/
