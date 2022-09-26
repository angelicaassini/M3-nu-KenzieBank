import Card from "../Card";
import TransactionFilter from "./TransactionFilter";

const List = ({listTransactions, removeTransaction, categories, setFilter}) => {
    

    return (
        <>
            <TransactionFilter categories={categories} setFilter={setFilter}/>
            {listTransactions.length ? (
                <ul>
                    {listTransactions.map((transaction, index) => (
                        <Card key={index} transaction={transaction} removeTransaction={removeTransaction} />
                    ))}
                </ul>
            ) 
            : 
            (
                <h1 className="nao-transacao">Não há nenhuma transação a ser mostrada.</h1>
            )}
        </>
    )
}
export default List;