
import './CampoTexto.css'

const CampoTexto = (props) => { //É a mesma coisa que criar a function como está no banner, só uma outra maneira de fazer 
    const placeholderModificada = `${props.placeholder}...`
 

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto"> 
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>        
        </div>
    )
}

export default CampoTexto;