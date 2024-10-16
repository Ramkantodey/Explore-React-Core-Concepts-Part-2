import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'
import Friend from './Friend'


function App() {

  function HandleClick() {
    alert('Button Clicked')
  }

  const HandleClick2 = () => {
    alert('Button Clicked 2')
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h2>React Core Concepts Part-2</h2>

      {/* <Friend></Friend> */}


      <Friends></Friends>

      <Users></Users>



      <button onClick={HandleClick}>Click Me</button>
      <button onClick={HandleClick2}>Click 2</button>
      <button onClick={() => { alert('click 3') }}>Click 3</button>
      {/* vejailla */}
      <button onClick={() => addToFive(3)}>Button Four</button>
      <Counter></Counter>
      <Team></Team>
    </>
  )
}

export default App
