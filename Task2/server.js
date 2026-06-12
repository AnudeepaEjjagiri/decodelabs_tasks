const express = require('express');
const app = express();

app.use(express.json());

let students = [
  {
    id: 1,
    name: "Anudeepa",
    course: "BTech"
  }
];

// GET API
app.get('/students', (req, res) => {
  res.json(students);
});

// POST API
app.post('/students', (req, res) => {

  const { name, course } = req.body;

  if (!name || !course) {
    return res.status(400).json({
      message: "Name and Course required"
    });
  }

  const student = {
    id: students.length + 1,
    name,
    course
  };

  students.push(student);

  res.status(201).json(student);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});