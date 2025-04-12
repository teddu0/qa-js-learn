const tasks = ["Task 1", "Task 2"];

function taskAdd(taskName) {
  tasks.push(taskName);
}

function deleteTaskByName(taskName) {
  const taskIndex = tasks.indexOf(taskName);
  if (taskIndex === -1) {
    console.log(`${taskName} нет в списке задач!`);
    return;
  }
  tasks.splice(taskIndex, 1);
}

function moveTaskToStart(taskName) {
  const taskIndex = tasks.indexOf(taskName);
  if (taskIndex === -1) {
    console.log(`${taskName} нет в списке задач!`);
    return;
  }
  const oldTask = tasks[taskIndex];
  tasks.splice(taskIndex, 1);
  tasks.unshift(oldTask);
}

taskAdd("Task 3");
taskAdd("Task 4");
taskAdd("Task 5");
taskAdd("Task 6");
console.log(tasks);
deleteTaskByName("Task 2");
moveTaskToStart("Task 5");
console.log(tasks);
