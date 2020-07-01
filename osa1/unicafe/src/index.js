import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}
const Button = ({ onClick, text }) => {

  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Display = () => <div>No feedback given</div>

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
      <td>{props.textend}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if(props.all === 0){
    return (
      <div>
        <Display/>
      </div>
    )
  }
  return (
    <table>
      <tbody>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value={props.all} />
      <StatisticLine text="avarage" value={(props.good - props.bad) / props.all} />
      <StatisticLine text="positive" value={props.good / props.all} textend="%" />
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const goodClick = () => {
    setAll(all + 1)
    setGood(good + 1)
  }
  const neutralClick = () => {
    setAll(all + 1)
    setNeutral(neutral + 1)
  }
  const badClick = () => {
    setAll(all + 1)
    setBad(bad + 1)
  }

  return (
    <div>
      <Header text="give feedback" />
      <Button onClick={goodClick} text="good" />
      <Button onClick={neutralClick} text="neutral" />
      <Button onClick={badClick} text="bad" />
      <Header text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)