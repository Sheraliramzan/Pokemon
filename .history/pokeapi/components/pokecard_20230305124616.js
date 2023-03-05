import styled from 'styled-components' 

export default function PokeCard({
  text="",
  src="",
  me=""
}) {
    return (

        <Card> <img
        
        src="Pokeball.png"
        alt="Pokeball"
        width={70}
        height={70}
      />
      

      <Typography marR={me}>{text}</Typography>
      <img
        
        src={src}
        alt="Charmander"
        width={70}
        height={70}
      />
    
      
      </Card>
    )
}

const Card = styled.div `
width: 350px;
height: 80px;
display: flex;
flex-direction:row;
color: #FFFFFF;
background-color: #FFFFFF;
box-shadow: 5px 10px #888888;
border-radius: 12px;
align-content: center;
padding: 10px;
justify-items:center;
margin-bottom:30px;
`

const Typography = styled.div `
font-size: 24px;
color: black;
justify-content: center;
margin-top: 10px;
padding: 10px;
text-align:center;
margin-right:${props=>props.marR};
`