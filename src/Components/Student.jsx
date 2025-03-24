import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editStudent } from '../feature/studentSlice';
import './Student.css';



function Student() {
  const students = useSelector((state) => state.students.students);
  const dispatch = useDispatch();
  
  const [editingStudent, setEditingStudent] = useState(null);
  const [studentDetails, setStudentDetails] = useState({
    name: '',
    course: '',
    age: '',
    batch: ''
  });

  const handleEditClick = (student) => {
    setEditingStudent(student.id);
    setStudentDetails({ ...student });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentDetails({ ...studentDetails, [name]: value });
  };

  const handleSaveChanges = () => {
    if (editingStudent !== null) {
      dispatch(editStudent({ ...studentDetails, id: editingStudent }));
      setEditingStudent(null);
    }
  };

  return (
    <div>
      <h2>Student Information</h2>
      <table border="1" style={{width: '120%', borderBlockColor: 'white', textAlign: 'center', 
        margin: 'auto', marginTop: '10px',backgroundColor: 'Black', color: 'white',height: '100px'}}>
        <thead>
          <tr >
            <th>Name</th>
            <th>Course</th>
            <th>Age</th>
            <th>Batch</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id === editingStudent ? <input type="text" name="name" value={studentDetails.name} onChange={handleInputChange} /> : student.name}</td>
              <td>{student.id === editingStudent ? <input type="text" name="course" value={studentDetails.course} onChange={handleInputChange} /> : student.course}</td>
              <td>{student.id === editingStudent ? <input type="number" name="age" value={studentDetails.age} onChange={handleInputChange} /> : student.age}</td>
              <td>{student.id === editingStudent ? <input type="text" name="batch" value={studentDetails.batch} onChange={handleInputChange} /> : student.batch}</td>
              <td>
                {student.id === editingStudent ? (
                  <button onClick={handleSaveChanges}>Save</button>
                ) : (
                
                 <button onClick={() => handleEditClick(student)}>Edit</button>
            
                 
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Student;
