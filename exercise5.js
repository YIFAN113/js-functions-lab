fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const uncompleted = json.reduce((user, todo) => {
      if (!todo.completed) {
        user.push({ userID: todo.userId, title: todo.title });
      }
      return user;
    }, []);

    console.log(uncompleted);
  })
  .catch(function(err) { 
    console.log(err);
  });