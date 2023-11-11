import React,{ useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components';
import RoleDies from './RoleDies';
import { Button, OutLineButton } from '../Button';

const GamePlay = () => {
  const [ score, setScore] = useState(0);
  const [selectedNum, setSelectedNum] = useState();
  const [currentDice, SetCurrentDice] = useState(1);
  const [error, setError] =useState("");

  const getRandomNumber = (min, max) => {
    console.log( Math.floor(Math.random() * (max - min) + min))
    return Math.floor(Math.random() * (max - min) + min);

  };
  
  const roleDice = () => {

    if(!selectedNum){ 
      setError("you have not selected any number")
      return}


    const randomNumber = getRandomNumber(1, 7) ;
    SetCurrentDice((prev) => randomNumber);


    if(selectedNum === randomNumber) {
      setScore((prev) => prev + randomNumber)
    }else {
      setScore((prev) => prev - 2)
    }
      setSelectedNum(undefined);
  };
  


  
  return (
    <MainContainer>
      <div className="top-section">

      <TotalScore score={score}/>


      <NumberSelector 
      selectedNum={selectedNum} 
      setSelectedNum={setSelectedNum} 
      error={error}
      setError={setError} />
      </div>

    <RoleDies 
    currentDice={currentDice} 
    roleDice={roleDice}
    />
    <div className="btns">
      <OutLineButton>reset</OutLineButton>
      <OutLineButton> ruls set</OutLineButton>
    </div>
    </MainContainer>
    )
}

export default GamePlay;

const MainContainer = styled.main`
  .top-section{
    display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 40px;
  }
  .btns{
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 200px;
    margin:0 auto;
    gap:15px;
  }

`
