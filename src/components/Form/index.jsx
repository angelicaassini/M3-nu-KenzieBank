import { useState } from "react";

const Form = ({listTransactions, setListTransactions, categories, addTransactionForm}) => {
    const [formData, setFormData] = useState({
        moneyValue: "",
        description: "",
        category: categories[0]
    })

    function onSubmit(e){
        e.preventDefault()
        if(formData.moneyValue.length){
            addTransactionForm(formData)
            setFormData({
                moneyValue: "",
                description: "",
                category: categories[0]
            })
        }
        else{
            alert("Preencher valor")
        }
    }

   
    return(
        <form onSubmit={onSubmit}>
            <input 
                type="text"
                value={formData.moneyValue}
                onChange={(e) => setFormData({...formData, moneyValue: e.target.value})} 
            />
            <input 
                type="text"
                value={formData.description}
                onChange={(e) =>  setFormData({...formData, description: e.target.value})} 
            />
            <select onChange={(e) => setFormData({...formData, category: e.target.value})}
                    defaultValue={formData.category}>

                {categories.map((category, index)  => (
                    <option key={index} value={category}>{category}</option>
                ))}
            </select>
            <button type="submit">Enviar</button>
        </form>
    )
}
export default Form;