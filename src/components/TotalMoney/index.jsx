const TotalMoney =  ({listTransactions}) => {

    return(
        <>
            {listTransactions.reduce((acc, actualValue) => (
             acc += actualValue   
            ))}

        </>
    )
}
export default TotalMoney;