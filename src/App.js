import { useState } from "react"
import { initialWorkouts, generateWorkout } from "./Workouts.js"
import "./App.css"

function App() {
  const [workouts, setWorkouts] = useState(initialWorkouts)

  const addNewWorkout = () => {
    // const newWorkout = [...workouts]
    // newWorkout.push({generateWorkout, done: false})
    // setWorkouts(newWorkout)

    //Shortened
    setWorkouts([...workouts, { generateWorkout, done: false}])
    console.log("addNewWorkout:", workouts)
  }

  // const deleteWorkout = (workout) => {
  //   const workoutsWithoutRemoved = workouts.filter(function(workouts){
  //     return workouts !== workout
  //   })
  //   setWorkouts(workoutsWithoutRemoved)
  //   console.log("deleteWorkout:", workout)
  // }

  //Shortened
  const deleteWorkout = workout => {
    setWorkouts(workouts.filter(workouts => workouts !== workout))
    console.log("deleteWorkout:", workout)
  }

  // const completeWorkout = (target) => {
  //   const doneWorkouts = workouts.map(function (workout) {
  //     if (workout === target) {
  //       return {...workout, done: !false}
  //     }
  //     return workout
  //   })
  //   setWorkouts(doneWorkouts)
  //   console.log("completeWorkout:", workouts)
  // }

  //Shortened
  const completeWorkout = (target) => {
    const doneWorkouts = workouts.map(workout =>
      workout === target ? { ...workout, done: !false } : workout
    )
    setWorkouts(doneWorkouts)
  }

  return (
    <div className="App">
      <h1>🏋️‍♀️Workout Generator</h1>
      <button onClick={addNewWorkout}>Add New Workout</button>
      <ul>
        {workouts.map((workout, index) => (
          <li key={index}>
            <p>
              {workout.sets}x sets of <strong>{workout.reps}x{workout.exercise}</strong> with {workout.rest} seconds rest
            </p>
            {!workout.done &&
              <button onClick={e => completeWorkout(workout)}>Done</button>}
            {workout.done &&
              <p>✅</p>}
            <button onClick={e => deleteWorkout(workout)}>Delete</button>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default App