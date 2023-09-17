fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const completedCountByUser = json.reduce((countByUser, todo) => {
      if (todo.completed) {
        if (countByUser[todo.userId]) {
          countByUser[todo.userId]++;
        } else {
          countByUser[todo.userId] = 1;
        }
      }
      return countByUser;
    }, {});

    console.log("Number of completed todos per user:", completedCountByUser);
  })
  .catch(function(err) { 
    console.log(err);
  });