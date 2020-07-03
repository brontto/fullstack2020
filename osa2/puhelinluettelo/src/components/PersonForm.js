import React from 'react'


const PersonForm = ({addName, handleNameChange, handleNumberChange, newName, newNumber}) => {
    return (
        <form onSubmit={addName.value}>
                <div>
                    name: <input
                        value={newName.value}
                        onChange={handleNameChange.value}
                    />
                </div>
                <div>
                    number: <input
                        value={newNumber.value}
                        onChange={handleNumberChange.value}
                    />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
    )

}

export default PersonForm