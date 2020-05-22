import React from 'react';
import styled from 'styled-components'

const InputUsuario = styled.input `
    width: 100px;
    margin-right: 20px;
    margin-top: 30px;
    margin-bottom: 20px;
`
const InputMensagem = styled.input `
    width: 300px;
    margin-right: 20px;
    margin-top: 30px;
    margin-bottom: 20px;
`
const BotaoEnviar = styled.button `
    width: 80px;
    margin-top: 30px;
    margin-bottom: 20px;
`

class EnvioMensagem extends React.Component {
    state = {
        mensagens: [
            {
            usuario: "",
            conteudo: "",     
            },
        ],
        valorInputUsuario: "",
        valorInputConteudo: ""
    }

OnChangeInputUsuario = (event) => {
    this.setState({valorInputUsuario: event.target.value})
}

OnChangeInputConteudo = (event) => {
    this.setState({valorInputConteudo: event.target.value})
}

novaMensagem = (event) => {
    event.preventDefault()
    const novaMensagem = {
        usuario: this.state.valorInputUsuario,
        conteudo: this.state.valorInputConteudo,
    }
    
    const novasMensagens = [... this.state.mensagens, novaMensagem]
    this.setState({mensagens: novasMensagens})

}

    render() {
    const  listaDeMensagens = this.state.mensagens.map((mensagem) => {
            return (
                <div>
                {mensagem.usuario}: {mensagem.conteudo}
                </div>
            )
        }
    )
        return (
        <div>
            <div>
                {listaDeMensagens}
            </div>
            
            <form> 
            <InputUsuario 
            value={this.state.valorInputUsuario}
            onChange={this.OnChangeInputUsuario}
            placeholder={"Usuário"}
            />
            <InputMensagem
            value={this.state.valorInputConteudo}
            onChange={this.OnChangeInputConteudo}
            placeholder={"Mensagem"}
            />
            <BotaoEnviar
            onClick={this.novaMensagem}>
            Enviar
            </BotaoEnviar>
            </form>

        </div>
        )
    }
}

export default EnvioMensagem;