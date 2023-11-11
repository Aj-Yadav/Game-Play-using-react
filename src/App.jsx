import { useState } from 'react';
import styled from 'styled-components';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StartGame from './components/StartGame';
import GamePlay from './components/GamePlay';

// 

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false)


  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  }
  return (
    <>
      {/* <Button>
        This is styled component button
      </Button> */}
      {/* <StartGame/> */}
      {  isGameStarted ? < GamePlay /> : <StartGame toggle={toggleGamePlay} />}
    </>
  )
}

export default App


// const Button = styled.button`
//   background-color: black;
//   color: white;
//   padding: 10 px;

// `;
