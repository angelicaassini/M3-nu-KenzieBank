/* eslint-disable no-restricted-globals */

import Form from './components/Form';
import List from './components/List';
import { useState } from 'react';
import './App.css';

function App() {

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



  return (
    <div className="App">
      {filter}
      <List 
        listTransactions={newListTransactions} 
        removeTransaction={removeTransaction} 
        categories={categories}
        setFilter={setFilter}/>
      <Form categories={categories} addTransactionForm={addTransactionForm}/>
    </div>
  );
}

export default App;
