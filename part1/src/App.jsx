import { useState } from "react"

const Hello = ({name, age}) =>{
  // const {name, age} = props
  const bornYear = () => new Date().getFullYear() - age
  return (
    <div>
      <p>
        Hello {name}, you are {age} year old
      </p>
      <p> So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0)

// contador
    // setTimeout(
    //   () => setCounter(counter + 1),
    //   1000
    // )

    const increaseByOne = () => setCounter(counter + 1)
    const setTozero = () => setCounter(0)

  return(
    <div>
      {counter}

      <button onClick={increaseByOne}> plus</button>

      <button onClick={setTozero}> zero </button> 
    </div>
  )
}

export default App