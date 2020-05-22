import React from 'react';
import './App.css';
import EnvioMensagem from './components/EnvioMensagem.js';
import styled from 'styled-components'

const TelaPrincipal = styled.div`
  position: absolute;
  left: 30%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  align-items: center; 
  border: 1px solid black;
  height: 98%;
  width: 40%;
`

class WhatsLab extends React.Component {

  render () {
    return (
      <TelaPrincipal>
        <EnvioMensagem 
        />
      </TelaPrincipal>
    ); 
  }
}

export default WhatsLab;
