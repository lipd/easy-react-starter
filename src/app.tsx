import { Greeting } from '@components/greeting'

interface IProperties {
  name: string
  age: number
}

function App({ name, age }: IProperties) {
  return (
    <div className="app">
      <Greeting />
      <span>{`Hello! I'm ${name}, ${age} years old.`}</span>
    </div>
  )
}

export default App
