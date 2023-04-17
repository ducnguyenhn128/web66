const express = require('express');
const app = express();

const PORT = 3001;


const users = [
    { name: "John Smith", age: 27, id: 123456 },
    { name: "Sarah Johnson", age: 34, id: 234567 },
    { name: "Michael Lee", age: 21, id: 345678 },
    { name: "Emily Davis", age: 45, id: 456789 },
    { name: "David Martinez", age: 29, id: 567890 },
    { name: "Jennifer Adams", age: 38, id: 678901 },
    { name: "Daniel", age: 26, id: 789012 },
    { name: "Samantha Wilson", age: 31, id: 890123 },
    { name: "William Brown", age: 42, id: 901234 },
    { name: "Jessica Nguyen", age: 25, id: 012345 },
  ];


  // example: http://localhost:3001/user/daniel/age/232?lte=true
  app.get('/user/:name/age/:age', (req, res, next) => {
    const name1 = req.params.name.toLowerCase();
    const age = req.params.age;

    const lte = Boolean(req.query.lte)

    let result = [];

    // logic check

    if (lte) {
      for (let i = 0; i < users.length; i++) {
        if ( (users[i].name.toLowerCase().includes(name1) ) && (users[i].age <= age) ) {
          result.push(users[i])
        }
      }
    } else {
      for (let i = 0; i < users.length; i++) {
        if ( (users[i].name.toLowerCase().includes(name1) ) && (users[i].age > age) ) {
          result.push(users[i])
        }
      }
    }

    res.send(result);
  })

  app.listen(PORT, () => {
    console.log(`Server is listening at PORT ${PORT} `)
  })