import React from 'react'
import styled from 'styled-components'

const StartGame = () => {
  return (
    <container>
        <img src="/images/dices.png" alt="" />
        <div>
            <h1>Dice Game</h1>
            <Button>Play Now</Button>
        </div>
    </container>
  )
}

export default StartGame;

const container = styled.div`
    max-width : 1180px;
` ;


const Button = styled.button`
    display : flex ;
    flex-direction : column ;
    justify-content :center;
    align-items : center ;
    padding : 10px 8px;
    gap : 10px;

    width : 220px;
    height : 44px;

    background-color: #000000;
    border-radius:5px;

    min-width : 220px;
    border : none;

    color: white;

`


// const Button = styled.button`
//     display : flex ;
//     flex-direction : column ;
//     justify-content :center;
//     align-items : center ;
//     padding : 10px 8px;
//     gap : 10px;

//     width : 220px;
//     height : 44px;

//     background-color: #000000;
//     border-radius:5px;

//     min-width : 220px;
//     border : none;

//     color: white;
// `
// const Button = styled.button`
//     display : flex ;
//     flex-direction : column ;
//     justify-content :center;
//     align-items : center ;
//     padding : 10px 8px;
//     gap : 10px;

//     width : 220px;
//     height : 44px;

//     background-color: #000000;
//     border-radius:5px;

//     min-width : 220px;
//     border : none;

//     color: white;
// `
