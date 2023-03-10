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
width: 540px;
height:70px;
display: flex;
flex-direction:row;
color: #FFFFFF;
background-color: #FFFFFF;
box-shadow: 5px 10px #888888;
border-radius: 12px;
align-content: center;
justify-content: center;
margin-top: -120px;
padding: 10px;
text-align:center;
`

const Typography = styled.div`
font-size: 24px;
align-content: center;
justify-content: center;
align-item:center;
color: black;
padding: 10px;
margin-top:10px;
`