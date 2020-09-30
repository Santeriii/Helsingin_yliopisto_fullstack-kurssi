import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import axios from 'axios'
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  useEffect(() => {
      personService
      .getAll()
      .then(persons => {
        setPersons(persons)
      })
  }, [])

  let generateKey = () => Math.round(300 * Math.random())

  const addPerson = (event) => {
    let includes = false

    event.preventDefault()
    const personObject = {
        name: newName,
        number: newNumber,
    }

    persons.map(name => {
            if (name.name === personObject.name) {
                includes = true
            }
        })

    if (!includes) {
      personService
      .create(personObject)
      .then(persons => {
        setPersons(persons.concat(personObject))
        setNewName('')
      })
    } else {
        window.alert(`${newName} is already added to phonebook`)
    }
  }

  const handleDelete = (event) => {
  console.log(event.target.value)

    personService
    .deleteItem(event.target.value)
    .then(persons => {
      console.log(persons)
      setPersons(persons)
    })
  }, [persons])

  const handleNumberChange = (event) => {
      console.log(event.target.value)
      setNewNumber(event.target.value)
  }

  const handlePersonChange = (event) => {
      console.log(event.target.value)
      setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
          <Filter persons={persons}  />
      </div>
      <form onSubmit={addPerson}>
        <div>
          name: <input
            value={newName}
            onChange={handlePersonChange}
        />
        </div>
        <div>
            number: <input
                value={newNumber}
                onChange={handleNumberChange}
            />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person =>
      <>
        <li key={generateKey()}>{person.name} {person.number}</li>
        <button value={person.id} onClick={handleDelete}>delete</button>
      </>
    )}
    </div>
  )

}

export default App