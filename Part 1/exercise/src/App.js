import { Header } from './components/Header'
import { Content } from './components/Content'
import { Total } from './components/Total'


const App = () => {
  const course = 'Half Stack application development'
  const contents = [
    {'part': 'Fundamentals of React', 'exercise': 10},
    {'part': 'Using props to pass data', 'exercise': 7},
    {'part': 'State of a component', 'exercise': 14}
  ]

  return (
    <div>
      <Header course={course} />
      <Content contents={contents} />
      <Total ex1={contents[0].exercise} ex2={contents[1].exercise} ex3={contents[2].exercise} />
    </div>
  )
}

export default App