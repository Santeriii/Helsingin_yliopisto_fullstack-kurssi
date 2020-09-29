import React from 'react'

const Course = ({ courses }) => {
    const yhteensa = courses.map(course =>
        (course.parts.reduce((total, courses) => total + courses.exercises, 0))
    )

    return (
        <div>
            {console.log(yhteensa)}
            {courses.map(course => 
                <div key={course.id}>
                    <h1>{course.name}</h1>
                    <ul>
                        {course.parts.map(part => 
                            <li key={part.id}>{part.name} {part.exercises}</li>,
                        )}
                        <li>Total of {yhteensa[(course.id - 1)]} exercises</li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Course