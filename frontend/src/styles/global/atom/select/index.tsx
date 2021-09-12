import styled from "styled-components";

export const CustomSelect = styled.select`
  width: 100%;
  outline: none;
  padding: 10px;
  border: 1px solid #d1d1d1;

  border-radius: .5em;
  :focus {
    box-shadow: 0 0 6px #08334667;
    border: 1px solid #083346;
  }
`