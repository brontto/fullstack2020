import React, { useState, useEffect } from 'react'
import Person from './components/Person'
import PersonForm from './components/PersonForm'
import Header from './components/Header'
import personsService from './services/persons'
import Notification from './components/Notification'

const App = () => {
    const [persons, setPersons] = useState([])

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const [notification, setNotification] = useState(null)

    useEffect(() => {
        console.log('effect')
        personsService
            .getAll()
            .then(intialPersons => {
                setPersons(intialPersons)
            })
    }, [])

    const addName = (event) => {
        console.log('add')
        event.preventDefault()

        if (persons.some(p => p.name === newName)) {
            alert(`${newName} is already added to phonebook`)
        } else {
            const personObject = {
                name: newName,
                number: newNumber
            }

            personsService
                .create(personObject)
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson))
                    setNewName('')
                    setNewNumber('')
                })

            setNotification(
                `${newName} is added to phonebook`
            )
            setTimeout(() => {
                setNotification(null)
            }, 4000)
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

    const delPerson = (person) => {
        if (window.confirm(`Delete ${person.name} ?`)) {
            personsService
                .remove(person.id)
                .then(() => {
                    personsService
                        .getAll()
                        .then(intialPersons => {
                            setPersons(intialPersons)
                            setNewName('')
                            setNewNumber('')
                        })
                })

            setNotification(
                `${newName} is deleted from phonebook`
            )
            setTimeout(() => {
                setNotification(null)
            }, 4000)
        }
    }

    return (
        <div>
            <Header text='Phonebook' />
            <Notification message={notification} />
            <PersonForm
                addName={(e) => addName(e)}
                handleNameChange={(e) => handleNameChange(e)}
                handleNumberChange={(e) => handleNumberChange(e)}
                newName={newName}
                newNumber={newNumber}
            />
            <Header text='Numbers' />
            <ul>
                {persons.map((part, i) =>
                    <Person
                        key={i}
                        person={part}
                        delPerson={() => delPerson(part)}
                    />
                )}
            </ul>

        </div>
    )

}

export default App