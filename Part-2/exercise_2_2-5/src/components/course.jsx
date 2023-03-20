const Course = ({courses}) => {
  // Define a get total function to get the total number of exercises
  const getTotal = (part) => {
    let total = 0
    part.map(p => (total += p.exercises))
    return (total)
  }

  return (
    <div>
      {courses.map((course, i) => (
        <div key={i}>
          <h1>{course.name}</h1>
          {course.parts.map((part, j) => (
            <p key={j}>{ part.name } {part.exercises}</p>
          ))}
          <h3>total of {getTotal(course.parts)} exercises</h3>
        </div>
      ))}
    </div>
  )
}

export default Course