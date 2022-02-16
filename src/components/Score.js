import styled from "styled-components"



const Done = styled.div`
  width: ${props => props.done * 100 / props.total}%;
  background-color: #090;
  height: ${props => props.total ? "var(--barHeight)" : 0};
`



const Wrong = styled.div`
  position: absolute;
  top: 0;
  width: ${props => props.wrong * 100 / props.total}%;
  background-color: #900;
  height: ${props => props.total ? "var(--barHeight)" : 0};
`



const Score = (props) => {
  const { total, done, wrong } = props

  return (
    <div id="score">
      <Done
        done={done}
        total={total}
      />
      <Wrong
        wrong={wrong}
        total={total}
      />
    </div>
  )
}



export default Score