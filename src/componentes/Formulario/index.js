import { useState } from 'react'
import Botao from "../Botao";
import CampoTexto from "../CampoTexto"; //Como o .js de CampoTexto é chamado index.js não é necessário o último CampoTexto no caminho
import ListaSuspensa from "../ListaSuspensa";
import './Formulario.css';

const Formulario = (props) => {

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const aoSalvar = (evento) => {
    evento.preventDefault()
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}> {/*SEMPRE QUE FOR LINKAR UMA VARIAVEL JS USA-SE {}*/}
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto 
          obrigatorio={true} 
          label="Nome" 
          placeholder="Digite seu nome" 
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto 
          obrigatorio={true} 
          label="Cargo" 
          placeholder="Digite seu cargo" 
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <CampoTexto 
          label="Imagem" 
          placeholder="Informe o endereço da imagem" 
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <ListaSuspensa 
          obrigatorio={true} 
          label="Time" 
          itens={props.times} 
          valor={time}
          aoAlterado={valor => setTime(valor)}
        />
        <Botao>
          Criar card      
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;
