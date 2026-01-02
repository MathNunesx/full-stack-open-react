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
  const name = 'Jordan'
  const age = 28

  return(
    <div>
      <h1> Greetings</h1>
      <Hello name='Mei' age={12 +10}/>
      <Hello name={name} age={age}/>
    </div>
  )
}

export default App