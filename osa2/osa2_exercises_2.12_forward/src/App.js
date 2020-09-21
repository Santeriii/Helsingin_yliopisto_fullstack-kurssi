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

        console.log(results)

        if (results.length > 10) {
            setSearchResults(searchResults.concat({name: "Too many search results"}))
        } else {
            setSearchResults(results)
        }
    }, [searchTerm])

    const handleCountrySearch = (event) => {
        setSearchTerm(event.target.value)
    }

    return (
        <div>
            <div>
                filter shown with: <input
                    value={searchTerm}
                    onChange={handleCountrySearch}
                />
                <ul>
                {searchResults.length === 1 ?

                searchResults.map(country => (
                    <div>
                        <h1 key={country.name}>{country.name}</h1><br/><p>{country.population}<br/>{country.capital}</p>
                    </div>
                ))

                :

                searchResults.map(country => (
                    <li key={country.name}>{country.name}</li>
                ))}
                </ul>
            </div>
        </div>
    )
}

export default App