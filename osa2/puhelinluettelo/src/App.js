import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Header from './components/Header'


const App = () => {
    const [persons, setPersons] = useState([])

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    useEffect(() => {
        console.log('effect')
        axios
        .get('http://localhost:3001/persons')
        .then(response => {
            console.log('promise fulfilled')
            setPersons(response.data)
        })
    },[])
    const addName = (event) => {
        event.preventDefault()

        if (persons.some(p => p.name === newName)) {
            alert(`${newName} is already added to phonebook`)

        } else {
            const nameObject = {
                name: newName,
                number: newNumber
            }
            setPersons(persons.concat(nameObject))
            setNewName('')
            setNewNumber('')
        }
    }

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }


    return (
        <div>
            <Header text='Phonebook'/>
            <PersonForm
                addName={addName}
                handleNameChange={handleNameChange}
                handleNumberChange={handleNumberChange}
                newName={newName}
                newNumber={newNumber}
            />
            <Header text='Numbers'/>
            <Persons persons={persons} />
        </div>
    )

}

export default App