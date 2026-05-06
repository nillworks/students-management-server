const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8000;

const studentData = [
  { id: 1, name: 'Rahim Ahmed', age: 20, department: 'CSE' },
  { id: 2, name: 'Karim Hasan', age: 22, department: 'EEE' },
  { id: 3, name: 'Sakib Khan', age: 21, department: 'BBA' },
  { id: 4, name: 'Nusrat Jahan', age: 23, department: 'CSE' },
  { id: 5, name: 'Tanvir Islam', age: 24, department: 'EEE' },
  { id: 6, name: 'Mim Akter', age: 20, department: 'BBA' },
  { id: 7, name: 'Rafiul Karim', age: 22, department: 'CSE' },
  { id: 8, name: 'Jannat Sultana', age: 21, department: 'EEE' },
  { id: 9, name: 'Shanto Das', age: 23, department: 'BBA' },
  { id: 10, name: 'Arif Hossain', age: 24, department: 'CSE' },
];

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from student Server world!');
});

app.get('/studentInfo', (req, res) => {
  res.send({ message: 'Successful data sent', studentsData: studentData });
});

app.post('/studentInfo', (req, res) => {
  console.log('Data in the working', req.body);
  const newStudent = req.body;
  newStudent.id = studentData.length + 1;

  studentData.push(newStudent);
  res.send({
    success: true,
    data: newStudent,
    message: 'post method is working',
  });
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
