import './style.css';

const TotalMoney =  ({listTransactions}) => {
      
    const totalMoney = listTransactions.reduce((acc, actualValue) => {
            return acc + Number(actualValue.moneyValue) }, 0)

    return(
        <div className="divSaldo">
            <div>
                <h3>Valor total</h3>
                <h6>O valor se refere ao saldo</h6>
            </div>
            {totalMoney === 0 ? 
                <img src=".//Group 271" alt="não há transações" />
            :
            <p>$ {totalMoney}</p>}
        </div>
        
    )
}
export default TotalMoney;