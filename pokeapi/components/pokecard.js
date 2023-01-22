import styled from 'styled-components' 

export default function PokeCard() {
    return (

        <Card> <img
        
        src="Pokeball.png"
        alt="Pokeball"
        width={70}
        height={70}
      />
      

      <Typography> 004  Charmander </Typography>
      <img
        
        src="Charmander.png"
        alt="Charmander"
        width={70}
        height={70}
      />
    
      
      </Card>
    )
}

const Card = styled.div `
width: 400px;
height: 110px;
display: flex;
flex-direction:row;
color: #FFFFFF;
background-color: #FFFFFF;
box-shadow: 5px 10px #888888;
border-radius: 12px;
align-content: center;
padding: 10px;

`

const Typography = styled.div `
font-size: 30px;
color: black;
justify-content: center;
margin-top: 10px;
padding: 10px;
`