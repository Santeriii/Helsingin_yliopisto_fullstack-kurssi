import React, { useState, useEffect } from 'react'

const Filter = ({ persons }) => {
    const [ hakusana, setHakusana ] = useState('')
    const [ hakutulokset, setHakutulokset ] = useState([])
  
    const generateKey = () => Math.round(300 * Math.random())

    const handleChange = (event) => {
        setHakusana(event.target.value)
    }
  
    useEffect(() => {
        const tulokset = persons.filter(person => person.name.toLowerCase().includes(hakusana))
        setHakutulokset(tulokset)
    }, [hakusana])
  

    return (
        <div>
        filter shown with: <input
        value={hakusana}
        onChange={handleChange}
        />
        <ul key={generateKey()}>
        {hakutulokset.map(item => (
            <li key={generateKey()}>{item.name}</li>
        ))}
        </ul>
        </div>
    )
}

export default Filter