import React from 'react'

const Persons = (props) => {
    return(
        <div>
            {props.persons.map(part =>
                <p key={part.name}>{part.name}: {part.number}</p>
            )}
        </div>

    )

}

export default Persons