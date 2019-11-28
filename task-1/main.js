const tasks = [
    {id: 234, title: 'Create user registration API', timeSpent: 4, category: 'Backend', type: 'task'},
    {id: 235, title: 'Create user registration UI', timeSpent: 8, category: 'Frontend', type: 'task'},
    {id: 237, title: 'User sign-in via Google UI', timeSpent: 3.5, category: 'Frontend', type: 'task'},
    {id: 238, title: 'User sign-in via Google API', timeSpent: 5, category: 'Backend', type: 'task'},
    {id: 241, title: 'Fix account linking', timeSpent: 5, category: 'Backend', type: 'bug'},
    {id: 250, title: 'Fix wrong time created on new record', timeSpent: 1, category: 'Backend', type: 'bug'},
    {id: 262, title: 'Fix sign-in failed messages', timeSpent: 2, category: 'Frontend', type: 'bug'},
];

let timeForFrontend = 0;
let timeForBug = 0;
let tasksWithUI = 0;
const typesObj = {Frontend: 0, Backend: 0};
const arrTasks = [];

tasks.map(task => {
    task.category === 'Frontend' ? (timeForFrontend += task.timeSpent,  typesObj.Frontend++) : typesObj.Backend++;
    task.type === 'bug' ? timeForBug += task.timeSpent : null;
    task.title.indexOf('UI') !== -1 ? tasksWithUI += 1 : null;
    task.timeSpent > 4 ? arrTasks.push({title: task.title, category: task.category}) : null;
});

console.log(`Затрачено времени на Frontend: ${timeForFrontend} часов`);
console.log(`Затрачено времени на работу над задачами типа bug: ${timeForBug} часов`);
console.log(`Количество задач, имеющих 'UI': ${tasksWithUI}`);
console.log(typesObj);
console.log(arrTasks);