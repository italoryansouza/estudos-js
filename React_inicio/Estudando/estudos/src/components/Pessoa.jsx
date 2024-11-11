import style from './Pessoa.module.css'

function Pessoa({nome, foto, idade, profissao}){
    return(
        <div>
            <img src={foto} alt={nome} className={style.photo}/>
            <p className={style.titleName}>{nome}</p>
            <p>{idade} anos</p>
            <p>{profissao}</p>
        </div>
    )
}

export default Pessoa