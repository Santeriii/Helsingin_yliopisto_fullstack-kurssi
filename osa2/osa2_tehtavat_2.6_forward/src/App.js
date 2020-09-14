import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  let generateKey = () => Math.round(300 * Math.random())

  const addPerson = (event) => {
    let includes = false

    event.preventDefault()
    const personObject = {
        name: newName,
        number: newNumber,
    }

    {persons.map(name => {
            if (name.name === personObject.name) {
                includes = true
            }
        })
    }

    if (!includes) {
        setPersons(persons.concat(personObject))
        setNewName('')
    } else {
        window.alert(`${newName} is already added to phonebook`)
    }
  }

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
        <li key={generateKey()}>{person.name} {person.number}</li>
    )}
    </div>
  )

}

export default App