import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
    const [ countries, setCountries ] = useState([])
    const [ searchResults, setSearchResults ] = useState([])
    const [ searchTerm, setSearchTerm ] = useState("")

    useEffect(() => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                setCountries(response.data)
            })
        const results = countries.filter(country => country.name.toLowerCase().includes(searchTerm))
    
        setSearchResults(results)
    }, [searchTerm])

    const handleCountrySearch = (event) => {
        setSearchTerm(event.target.value)
    }

    const generateKey = () => {
        return Math.round(1000 * Math.random)
    }

    return (
        <div>
            <div>
                filter shown with: <input
                    value={searchTerm}
                    onChange={handleCountrySearch}
                />
                <ul key={generateKey}>
                    {searchResults.map(country => (
                    <li key={generateKey}>{country.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default App