import {FaTrash} from "react-icons/fa";
import './style.css';

const Card = ({transaction, removeTransaction}) =>{


    return (
        <li>
            <div className="description-category">
                <p>{transaction.description}</p>
                <span>{transaction.category}</span>
            </div>
            <div className="money-trash">    
                <span>{transaction.moneyValue}</span>
                <button onClick={() => removeTransaction(transaction)}>
                    <FaTrash/>
                </button>
            </div>
        </li>
    )
}
export default Card;

