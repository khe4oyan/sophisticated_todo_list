// libs
import styled from "styled-components"

const Root = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 70px;
  border-radius: 10px;
  margin-bottom: 10px;
  font-weight: bold;
  color: #0007;
  border: 1px solid #0002;
  background-color: #00000003;
`;

export default function DragingHere() {
  return (
    <Root>
      Drop Here
    </Root>
  )
}
