/* eslint-disable no-restricted-globals */

import { useState } from 'react';
import Form from '../../components/Form';
import TotalMoney from '../../components/TotalMoney';
import List from '../../components/List';
import './style.css';
import Imagem from '../../Nu Kenzie.png';

const Dashboard = ({setIsHome}) => {
    const [listTransactions, setListTransactions] = useState([])
    const [filter, setFilter] = useState("")
    
  
    const newListTransactions = listTransactions.filter(transaction => 
        filter === "" ? true : transaction.category === filter)
  
    const categories = ["Entradas", "Despesas"]
  
    function addTransactionForm(formData){
      setListTransactions([...listTransactions, formData])
    }
  
    function removeTransaction(clickedTransaction){
      const newTransactionList = listTransactions.filter((transaction) => 
        transaction !== clickedTransaction)
      if(confirm('Deseja excluir mesmo esta transação?')){
        setListTransactions(newTransactionList);
      }
    }

    return(
        <>
            <header>
                <img src={Imagem} alt="logo Kenzie" />
                <button onClick={() => setIsHome(true)}>Home</button>
            </header>

            {filter}
            <main>
                <div className='leftColumn'>
                    <Form categories={categories} addTransactionForm={addTransactionForm}/>
                    <TotalMoney listTransactions={listTransactions}/>
                </div>
                <div className='divList'>
                    <List
                        listTransactions={newListTransactions} 
                        removeTransaction={removeTransaction} 
                        categories={categories}
                        setFilter={setFilter}/>
                </div>
            </main>

        </>
    )
}
export default Dashboard;