const tasks = ["Task 1", "Task 2", "Task 3"];

// continue просто пропускает итерацию если условие возвращает true
for (let i = 0; i < tasks.length; i++) {
  if (tasks[i] === "Task 2") {
    continue;
  }
  console.log(tasks[i]);
}
console.log("=======");

// break останавливает цикл полностью если условие возвращает true
for (let i = 0; i < tasks.length; i++) {
  if (tasks[i] === "Task 2") {
    break;
  }
  console.log(tasks[i]);
}
