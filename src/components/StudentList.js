import React from 'react';
import './StudentList.css';
import PropTypes from 'prop-types';
import Student from './Student';

const StudentList = (props) => {

    const studentComponents = props.students.map((student) => {
        return (
            <li key={student.id}>
                <Student
                    name={student.nameData}
                    email={student.emailData}
                    id={student.id}
                    isPresent={student.isPresent}
                    onUpdateStudent={props.onUpdateStudent}
                ></Student>
            </li>
        );
    });

    return (
        <section>
            <h2>Student List</h2>
            <ul>
                {studentComponents}
            </ul>
        </section>
    );
};

StudentList.propTypes = {
    students: PropTypes.arrayOf(PropTypes.shape({
        nameData: PropTypes.string.isRequired,
        emailData: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        isPresent: PropTypes.bool.isRequired,
        onUpdateStudent: PropTypes.func.isRequired,
    })).isRequired
};

export default StudentList;