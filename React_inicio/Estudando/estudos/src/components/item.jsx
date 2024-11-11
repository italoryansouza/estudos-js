// Validando o tipo de dados
import PropTypes from 'prop-types'

function Item({marca, lancamento}){
    return (
        <>
            <li>
                {marca} - {lancamento}
            </li>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string,
    lancamento: PropTypes.number,
}

// Item.defaultProps = {
//     marca: 'Insira a marca!',
//     lancamento: 0, 
// }

// Dessa forma a propriedade marca deve ser uma string e é sempre requerida

export default Item