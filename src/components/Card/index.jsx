import {FaTrash} from "react-icons/fa";

const Card = ({transaction, removeTransaction}) =>{


    return (
        <li>
            <span>{transaction.moneyValue}</span>
            <p>{transaction.description}</p>
            <span>{transaction.category}</span>
            <button onClick={() => removeTransaction(transaction)}>
                <FaTrash/>
            </button>
        </li>
    )
}
export default Card;

