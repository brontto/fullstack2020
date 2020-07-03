import React from 'react'

const Header = ({ course }) => {
    return (
        <h1>{course.name}</h1>
    )
}

const Content = ({ course }) => {
    return (
        <div>
            {course.parts.map(part =>
                <Part key={part.id} part={part} />
            )}
        </div>
    )
}

const Part = ({ part }) => {
    return (
        <p>{part.name} {part.exercises}</p>
    )
}

const Total = ({parts}) => {
    
    const sum = parts.reduce((total, next) =>
        total + next.exercises, 0
    )
    return (
    <p>Number of exercises {sum}</p>
    )
}

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total parts={course.parts} />
        </div>
    )
}

export default Course