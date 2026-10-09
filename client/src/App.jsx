import { useState, useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import axios from 'axios';


function App() {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/students')
      .then((response) => {
        setStudents(response.data);
      });

  }, []);

  return (
    <div>
      <h1>Student Management System</h1>
      <h2>Welcome to our MERN Application</h2>

      {students.map(student => (
        <div key={student.id}>
          <h3>{student.name}</h3>
          <p>Name: {student.name}</p>
          <p>Course: {student.course}</p>
          <p>Age: {student.age}</p>
        </div>
      ))}
    
    </div>
  )
}

export default App
