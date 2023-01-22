import styled from 'styled-components' 

export default function PokeCard({
    text = "", 
    src = "",
    margin = "0"
    
}) {
    

    return (

        <Card> <img
        
        src="Pokeball.png"
        alt="Pokeball"
        width={70}
        height={70}
      />
      

      <Typography> {text} </Typography>
      <img
        
        src={src}
        alt="Pokemon"
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
color: #FFFFFF;
background-color: #FFFFFF;
box-shadow: 5px 10px #888888;
border-radius: 12px;
align-content: center;
padding: 10px;
margin: ${props=>props.mar}
`

const Typography = styled.div `
font-size: 30px;
color: black;
justify-content: center;
text-align: center;
padding: 10px;
align-items: center;
display: flex;
`