fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const uncompleted = json.reduce((accumulator, todo) => {
      if (!todo.completed) {
        accumulator.push({ userID: todo.userId, title: todo.title });
      }
      return accumulator;
    }, []);

    console.log(uncompleted);
  })
  .catch(function(err) { 
    console.log(err);
  });