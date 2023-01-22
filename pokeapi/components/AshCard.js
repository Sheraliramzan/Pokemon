import styled from 'styled-components' 

export default function AshCard() {
    return (

        <Card> <img
        
        src="Pokeball.png"
        alt="Pokeball"
        width={70}
        height={70}

        />

        <Typography> Ash's Pokemon</Typography>
        <img
        
        src="Pokeball.png"
        alt="Pokeball"
        width={70}
        height={70}
      />
      </Card>
    )
}

const Card = styled.div `
width: 560px;
height: 100px;
display: flex;
flex-direction:row;
color: #FFFFFF;
background-color: #FFFFFF;
box-shadow: 5px 10px #888888;
border-radius: 12px;
align-content: center;
justify-content: center;
margin-top: -10px;
padding: 10px;
`

const Typography = styled.div`
font-size: 48px;
align-content: center;
justify-content: center;
color: black;
padding: 10px;
`