import styled from "styled-components"

const Button = styled.button`
  background: ${props => (props.primary ? "#96d600" : "white")};
  border: 2px solid #96d600;
  border-radius: 0.5rem;
  padding: 10px 50px;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  color: ${props => (props.primary ? "white" : "#96d600")};
  cursor: pointer;
  transition: 0.3s;

  :hover {
    background: #7bb000;
    border: 2px solid #7bb000;
    color: white;
  }
`
export default Button
