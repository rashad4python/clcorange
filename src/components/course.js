import React, { useState } from 'react';
import './Course.css'; // Assuming you will be using this CSS file for styling

const Course = () => {
  const [activeCourse, setActiveCourse] = useState(null);

  const courses = [
    {
      id: 1,
      name: 'Course 1',
      description: 'This is a detailed description of Course 1. Learn all the fundamentals and advanced topics.'
    },
    {
      id: 2,
      name: 'Course 2',
      description: 'This is a detailed description of Course 2. Covering practical exercises and theoretical knowledge.'
    },
    {
      id: 3,
      name: 'Course 3',
      description: 'This is a detailed description of Course 3. Master your skills in this advanced course.'
    },
    {
      id: 4,
      name: 'Course 4',
      description: 'This is a detailed description of Course 4. Master your skills in this advanced course.'
    },
    {
      id: 5,
      name: 'Course 5',
      description: 'This is a detailed description of Course 5. Master your skills in this advanced course.'
    }
  ];

  const handleCourseClick = (id) => {
    setActiveCourse(id);
  };

  return (
    <div className="courses-wrapper">
      {courses.map((course) => (
        <div
          key={course.id}
          className={`course-container ${activeCourse === course.id ? 'active' : ''}`}
          onClick={() => handleCourseClick(course.id)}
        >
          <div className="course-button-container">
            <button
              className={`course-name ${activeCourse === course.id ? 'active' : ''}`}
            >
              {course.name}
            </button>
          </div>
          <div className="course-description-container">
            <p>{course.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Course;
