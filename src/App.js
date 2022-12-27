import { useState } from 'react';
import StudentList from './components/StudentList';
import ClassInfo from './components/ClassInfo';
import Student from './components/Student';

function App() {
    const [studentData, setStudentData] = useState([
        {
            nameData: 'Ada',
            emailData: 'ada@dev.org',
            id: 1,
            isPresent: true,
        },
        {
            nameData: 'Soo-ah',
            emailData: 'sooah@dev.org',
            id: 2,
            isPresent: true,
        },
        {
            nameData: 'Chrissy',
            emailData: 'chrissy@dev.org',
            id: 3,
            isPresent: false,
        }
    ]);
  
  const updateStudentData = (id) => {
    const students = studentData.map((student) => {
      if (student.id === id) {
        student.isPresent = !student.isPresent;
      }

      return student;
    });
    setStudentData(students)
  };

    return (
        <main>
            <h1>Attendance</h1>
        <StudentList
          students={studentData}
          onUpdateStudent={updateStudentData} />
        </main>
    );
}

export default App;