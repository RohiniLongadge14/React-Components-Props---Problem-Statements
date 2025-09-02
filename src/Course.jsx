import React from 'react'

function Course({courseName, modules }) {
    return (
        <>
            <h1>9. Course Component with Array Props</h1>
            <ul>
                <li>Course Name = {courseName}</li>
                <li>
                    Modules :-<ul>
                        {modules.map((module1, index) => (
                            <li key={index}>{module1}</li>
                        ))}
                    </ul>
                </li>
            </ul>
            <hr />
        </>
    )
}

export default Course
