import "./style.css";

const TotalMoney = ({ listTransactions }) => {
  const totalMoney = listTransactions.reduce(
    (acc, actualValue) => {
      return actualValue.category === "Entradas"
        ? acc + Number(actualValue.moneyValue)
        : acc - Number(actualValue.moneyValue)
    },0);

  return (
    <div className="divSaldo">
      {totalMoney === 0 ? (
          <></>
          ) : 
          (
            <>
                <div>
                    <h3>Valor total</h3>
                    <h6>O valor se refere ao saldo</h6>
                </div>
                <p>$ {totalMoney}</p>
            </>
      )}
    </div>
  );
};
export default TotalMoney;
