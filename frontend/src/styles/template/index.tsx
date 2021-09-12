import styled from "styled-components";

export const GridTemplate = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  display: grid;
  grid-template-rows: minmax(90px, 100px) 1fr;
  grid-template-columns: auto 1fr;
  grid-template-areas: 
    "header header"
    "options body"
  ;
  overflow: hidden;
  transition: all .5s ease-in-out;
`

export const ContainerHeader = styled.div`
  padding: 10px;
  background-color: #083346;
  color: white;
  grid-area: header;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ContainerOptions = styled.div<{ explain: boolean }>`
  grid-area: options;
  background-color: ${ props => props.explain ? '#1f1f1f' : 'transparent' } ;
  color: white;
  width: 300px;
  
  position: absolute;
  left: ${ props => props.explain ? '0px' : '-250px' };
  transition: all .5s ease-in-out;
  
  top: 100px;
  height: 90vh;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  text-align: left;
`

export const ContainerBody = styled.div`
  grid-area: body;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
`

export const ContainerNavOptions = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`