import React,{ useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components';
import RoleDies from './RoleDies';
import { Button, OutLineButton } from '../Button';
import Rules from './Rules';


const GamePlay = () => {
  const [ score, setScore] = useState(0);
  const [selectedNum, setSelectedNum] = useState();
  const [currentDice, SetCurrentDice] = useState(1);
  const [error, setError] =useState("");
  const [showRules,setShowRules] = useState(false);

  const getRandomNumber = (min, max) => {
    console.log( Math.floor(Math.random() * (max - min) + min))
    return Math.floor(Math.random() * (max - min) + min);

  };
  
  const roleDice = () => {

    if(!selectedNum){ 
      setError("you have not selected any number")
      return}


    const randomNumber = getRandomNumber(1, 7) ;
    SetCurrentDice((prev) => randomNumber );


    if(selectedNum === randomNumber) {
      setScore((prev) => prev + randomNumber)
    }else {
      setScore((prev) => prev - 2)
    }
      setSelectedNum(undefined);
  };
  
  const resetScore = () => {
    setScore(0);
  }

  
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
      <OutLineButton onClick={resetScore}>reset</OutLineButton>
      <OutLineButton onClick={() => setShowRules((prev) => !prev )}>{showRules ? "Hide" : "Show"} Rules</OutLineButton>
    </div>
   { showRules && <Rules/>}
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
    align-items: center;
    flex-direction: column;
    /* max-width: 200px; */
    /* margin:0 auto; */
    margin-top: 20px;
    gap:20px;
  }

`
