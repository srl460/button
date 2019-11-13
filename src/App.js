import React, {useState} from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Buttons</h1>
        <SomeComp/>
        <ButtonTwo/>
        <ButtonThree/>
      </header>
    </div>
  );
}


const SomeComp = () => {
  const [count, setValue] =  useState("")
  const changeName = () => {
    setValue("")
  }
  return(
    <>
    {count.length > 0 && <div>{count}</div>}
    <button className="hotbutton" onClick={changeName}>Button 1</button>
    </>
  )
}

const ButtonTwo = () => {
  const [count, setValue] =  useState("")
  const changeName = () => {
    setValue("")
  }
  return(
    <>
    {count.length > 0 && <div>{count}</div>}
    <button className="hotbutton" onClick={changeName}>Button 2</button>
    </>
  )
}

const ButtonThree = () => {
  const [count, setValue] =  useState("")
  const changeName = () => {
    setValue("")
  }
  return(
    <>
    {count.length > 0 && <div>{count}</div>}
    <button className="hotbutton" onClick={changeName}>Button 3</button>
    </>
  )
}



/* 
function ExampleInteraction() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  if(count > 100) {
    return
  } else {
    return (
      <div>
        <p>Do Not click 100 times, please</p>
        <p>You clicked {count} times</p>
        <button className="hotbutton" 
        onClick={handleClick}>
          Click me
        </button>
      </div>
    )
}
} */

export default App;
