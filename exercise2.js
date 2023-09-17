fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    // 创建一个新的数组，只包含所有待办事项的标题
    const todoTitles = json.map(todo => todo.title);

    // 显示todoTitles数组，不包含序号
    console.log(todoTitles)
  })
  .catch(function(err) { 
    console.log(err);
  });