import React from 'react'
import styled from 'styled-components'

const Roledice = ({roleDice,currentDice}) => {




  return (
    <DiceContainer>
        <div className='dice' onClick={roleDice }>
            <img src={`/dice${currentDice}.png`} alt="dice" />
        </div>
        <p>Click on dice to roll</p>
    </DiceContainer>
  )
}

export default Roledice

const DiceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  margin-top: 48px;
  flex-direction: column;
  justify-content: center;


    .dice{
        cursor: pointer;
    }

  p{
    font-size: 24px;
  }
`
