import styled from 'styled-components' 

export default function PokeInfoCard({
  text="",
  src="",
  me=""
}) {
    return (

        <Card> 
        <Typography></Typography>
      

      <Typography marR={me}>{text}</Typography>
      <img
        
        src={src}
        alt="Pokemon"
        width={200}
        height={200}
        margin-top={-50}
      />
    
      
      </Card>
    )
}

const Card = styled.div `
width: 300px;
height: 500px;
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