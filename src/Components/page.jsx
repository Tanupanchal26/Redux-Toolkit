import React, { useState } from 'react';
import './Student.css';
const StudentForm = ({ addStudent }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [course, setCourse] = useState('');
    const [batch, setBatch] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        addStudent({ name, age, course, batch }); // Pass data to parent
        setName('');
        setAge('');
        setCourse('');
        setBatch('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Age:</label>
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Course:</label>
                <input
                    type="text"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Batch:</label>
                <input
                    type="text"
                    value={batch}
                    onChange={(e) => setBatch(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default StudentForm;

