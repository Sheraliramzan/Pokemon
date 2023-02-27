import styled from 'styled-components' 

export default function PokeInfoCard({
  text="",
  src="",
  me=""
}) {
    return (
        <RedCard>
        <Card> 
        <Typography></Typography>
      

      <Typography marR={me}>{text}</Typography>
      <img
        src={src}
        alt="Pokemon"
        width={200}
        height={200}
      />
        <Line></Line>
      
      </Card>
      </RedCard>
    )
}

const Card = styled.div `
// width: 350px;
// height: 450px;
display: flex;
flex-direction:row;
color: #FFFFFF;
// background-color: #FFFFFF;
border-radius: 12px;
align-content: center;
padding: 10px;
justify-items:center;
margin-bottom:30px;
margin-left: -24px;
`

const RedCard = styled.div `
// width: 350px;
// height: 450px;

color: #FFFFFF;
// background-color: #C93030;
// box-shadow: 5px 7px #888888;
// border-radius: 12px;
align-content: left;
padding: 10px;
justify-items:center;
margin-bottom:30px;
position: relative;
top: 60px;
left: 180px;
`

const Line = styled.hr`
border-top: 3px solid #bbb;

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