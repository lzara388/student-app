import { useState } from 'react';
import StudentList from './components/StudentList';

function App() {
    const [studentData, setStudentData] = useState([
        {
            id: 1,
            nameData: 'Ada',
            emailData: 'ada@dev.org',
            isPresentData: false
        },
        {
            id: 2,
            nameData: 'Soo-ah',
            emailData: 'sooah@dev.org',
            isPresentData: false
        },
        {
            id: 3,
            nameData: 'Chrissy',
            emailData: 'chrissy@dev.org',
            isPresentData: true
        }
    ]);

    const updateStudentData = updatedStudent => {
        const students = studentData.map(student => {
            if (student.id === updatedStudent.id) {
                return updatedStudent;
            } else {
                return student;
            }
        });

        setStudentData(students);
    };

    return (
        <main>
            <h1>Attendance</h1>
            <StudentList
                students={studentData}
                onUpdateStudent={updateStudentData}
                ></StudentList>
        </main>
    );
}

export default App;