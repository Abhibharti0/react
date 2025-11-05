import './App.css'
import Card from './components/Card'

function App() {
 

  return (
    <div>
        <Card name="Abhishek Bharti">
        <h1>Best Web Dev Course</h1>
        <p>Trying to be Consistent in this</p>
        <p>will complete the course sonn</p>
      </Card>
      <Card children="main ek children hu ">
        main nhi rhunga to  Card pass wala children display hoga
      </Card>
    </div>
  )
}

export default App
