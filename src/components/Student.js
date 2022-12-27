import { useState } from 'react';
import PropTypes from 'prop-types';
import './Student.css';

const Student = (props) => {

// this is a callback function to let App know which student to update
    const updateAttendence = () => {
        props.onUpdateStudent(props.id)
    };

    const nameColor = props.isPresent ? 'green' : 'red';

    return (
        <div>
            <ul>
                <li className={nameColor}>Nickname: {props.name}</li>
                <li>Email: {props.email}</li>
            </ul>
            <button onClick={updateAttendence}>Toggle if {props.name} is present</button>
        </div>
    );
};

Student.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isPresent: PropTypes.bool.isRequired,
    onUpdateStudent: PropTypes.func.isRequired,
};

export default Student;