import React,{ useState } from "react";
import styled from "styled-components";

const RoleDies = ({ currentDice, roleDice}) => {

   

  return (
    <DiesContainer>
      <div className="dice">
        {/* <img src="" alt="" /> */}
        <img
          src={`/images/Dice/dice_${currentDice}.png`}
          alt="dies image"
          onClick={roleDice}
        />
        <h2>clidk img to Role Dies</h2>
      </div>
    </DiesContainer>
  );
};

export default RoleDies;

const DiesContainer = styled.div`
  display: flex;
  justify-content: center;
`;
