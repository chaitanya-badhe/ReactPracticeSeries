import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';
import Roledice from './Roledice';
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
const GamePlay = () => {
      const [score , setScore] =useState(0);
      const [selectedNumber , setSelectedNumber] = useState();
      const [currentDice , setCurrentDice] = useState(1);
      const[error , setError] = useState();


      const generateRandomNumber = (min , max) =>{
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };


    const roleDice =()=>{
        if (!selectedNumber){
          setError("You have not selected your number");
          return;
        };
        setError("");

        const randomNumber = generateRandomNumber(1,6);
        setCurrentDice((prev)=>randomNumber);


        if (selectedNumber === randomNumber){
          setScore((prev)=>prev + randomNumber);
        }
        else{
          setScore((prev) => prev-2);
        }

        setSelectedNumber(undefined);
    }

  return (
    <MainContainer>
    <div className='top_section'>
      <TotalScore score ={score} />
      <NumberSelector error = {error}     setError={setError}
       selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/> 
    </div>
    <Roledice currentDice={currentDice} roleDice={roleDice}/>
    </MainContainer>
  )
}

export default GamePlay


const MainContainer = styled.main`
    padding-top: 70px;
    .top_section{
        display : flex;
        justify-content : space-around;
        align-items: end;
    }
`