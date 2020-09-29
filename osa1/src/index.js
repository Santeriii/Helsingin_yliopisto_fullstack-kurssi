import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Statistics = props => {
  let sumAvg = 0

  if (props.allFeedbackInputs === 0) {
    return <div>No feedback given.</div>
  }
  return (
  <table>
    <tbody>
      <tr>
        <th></th>
        <th></th>
      </tr>
      <tr>
        <td>Good</td>
        <td>{props.good}</td>
      </tr>
      <tr>
        <td>Neutral</td>
        <td>{props.neutral}</td>
      </tr>
      <tr>
        <td>Bad</td>
        <td>{props.bad}</td>
      </tr>
      <tr>
        <td>All</td>
        <td>{props.allFeedbackInputs}</td>
      </tr>
      <tr>
        <td>Average</td>
        <td>{props.average}</td>
      </tr>
      <tr>
        <td>Positive</td>
        <td>{props.good / (props.good + props.neutral + props.bad) * 100} %</td>
      </tr>
  </tbody>
</table>
  )
}



const App = (props) => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allFeedbackInputs, setAll] = useState(0)
  const [averageList, setAverageList] = useState([])
  const [average, setAverage] = useState(0)

  const countAverage = () => {
    if (averageList.length < 1) {
      setAverage(0)
    } else {
      let sumAvg = 0
      averageList.forEach(value => sumAvg += value)
      setAverage(sumAvg / allFeedbackInputs)
    }
  }

  const handleGoodClick = () => {
    setAverageList(averageList.concat(1))
    setAll(allFeedbackInputs + 1)
    setGood(good + 1)
    countAverage()
  }

  const handleNeutralClick = () => {
    setAverageList(averageList.concat(0))
    setAll(allFeedbackInputs + 1)
    setNeutral(neutral + 1)
    countAverage()
  }

  const handleBadClick = () => {
    setAverageList(averageList.concat(-1))
    setAll(allFeedbackInputs + 1)
    setBad(bad + 1)
    countAverage()
  }

  const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
      {text}
    </button>
  )

  return ( 
    <div>
      <p>Give feedback</p>
      <div>
        <Button onClick={handleGoodClick} text='Good' /><Button onClick={handleNeutralClick} text='Neutral' /><Button onClick={handleBadClick} text='Bad' />
      </div>
      <p>Statistics</p>
      <div>
        <Statistics good={good} neutral={neutral} bad={bad} allFeedbackInputs={allFeedbackInputs} average={average} positive={positive}/>
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)