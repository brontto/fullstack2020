import React from 'react'

const Content = (props) => {
    return(
        <div>
            {props.persons.map(part =>
                <p key={part.name}>{part.name}: {part.number}</p>
            
            )}
        </div>

    )

}

export default Content