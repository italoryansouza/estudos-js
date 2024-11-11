function Evento(){
    function meuEvento(){
        console.log('Fui ativado')
    }

    return (
         <div>
            <p>Clique para acionar um EVENTO:</p>
            <button onClick={meuEvento}>Ativar!</button>
         </div>
    )
}

export default Evento