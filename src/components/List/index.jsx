import Card from "../Card";
import TransactionFilter from "./TransactionFilter";
import './style.css';
import Img from '../../Group 271.png';

const List = ({listTransactions, removeTransaction, categories, setFilter}) => {
    

    return (
                  
        <div className="transactionsList">
            {listTransactions.length ? (
            <ul>
                <TransactionFilter categories={categories} setFilter={setFilter}/>
                {listTransactions.map((transaction, index) => (
                    <Card key={index} transaction={transaction} removeTransaction={removeTransaction} />
                ))}
            </ul>
            ) 
            : 
            (
                <img src={Img} alt="sem transacoes" />
            )}
        </div>
    
    )
}
export default List;