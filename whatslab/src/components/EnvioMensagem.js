import React from 'react';

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

novaMensagem = () => {
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
            <input
            value={this.state.valorInputUsuario}
            onChange={this.OnChangeInputUsuario}
            placeholder={"Usuário"}
            />
            <input
            value={this.state.valorInputConteudo}
            onChange={this.OnChangeInputConteudo}
            placeholder={"Mensagem"}
            />
            <button
            onClick={this.novaMensagem}>
            Enviar
            </button>
            <div>
                {listaDeMensagens}
            </div>
        </div>
        )
    }
}

export default EnvioMensagem;