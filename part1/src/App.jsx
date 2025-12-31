const Hello = (props) => {
  console.log(props)
  return(
    <div>
      <p> Hi {props.name}, you are {props.age} years old</p>
    </div>
  )
}


const App = () => {
  // console.log("Hello from component")
  // const now = new Date()
  // const a = 10
  // const b = 20
  // console.log(now, a+b)

  // const name = 'Nunes'
  // const age = 22

  const friends = [
    {name: 'Hayan', age: 18},
    {name: 'Noelle', age: 25}
  ]
  return (
    <div>
      {/* <h1>Greetings</h1>
      <Hello name='Lucas' age={26 +11}/>
      <Hello name={name} age={age}/> */}
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
    </div>
  )
}

export default App