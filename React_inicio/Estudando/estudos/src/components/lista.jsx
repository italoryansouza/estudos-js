import Item from './item'
import style from './lista.module.css'

function Lista(){
    return (
        <>
            <h2 className={style.space}>Lista de Itens</h2>
            <ul>
                <Item marca='Ferrari' lancamento={2005}/>
                <Item marca='Mercedez' lancamento={2029}/>
                <Item />
            </ul>
        </>
    )
}

export default Lista