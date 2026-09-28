import React from 'react'
import styled from 'styled-components'

const StartGame = () => {
  return (
    <Container>
      <Left>
        <img src="/Dice.png" alt="dice" />
      </Left>

      <Right className='content'>
        <h1>Dice Game</h1>
        <Button>Play Now</Button>
      </Right>
    </Container>
  )
}

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;


  .content{
    h1{
        font-size: 96px ;
        white-space : nowrap ;
    }
  }
`

const Left = styled.div`
  flex: 1; /* left half */
  display: flex;
  justify-content: center;
  align-items: center;
`

const Right = styled.div`
  flex: 1; /* right half */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Button = styled.button`
  color: white;
  padding: 10px 18px;
  background: #000000;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  margin-top: 20px;
  font-size : 16px ;
`

