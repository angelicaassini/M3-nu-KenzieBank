import { useState } from "react";
import './style.css';

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
            <div className="div-description">
                <span>Descrição</span>
                <input className="input-description"
                    type="text"
                    placeholder="Digite aqui sua descrição"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})} 
                    />
                <span>Ex: Compra de roupas</span>
            </div>

            <div className="value-category">
                <div className="div-value">
                    <span>Valor</span>
                    <input className="input-value"
                        type="number"
                        min="0"
                        placeholder="                       R$"
                        value={formData.moneyValue}
                        onChange={(e) =>  setFormData({...formData, moneyValue: e.target.value})} 
                    />
                </div>
                <div className="div-select">
                    <span>Tipo de valor</span>
                    <select onChange={(e) => setFormData({...formData, category: e.target.value})}
                            defaultValue={formData.category}>

                        {categories.map((category, index)  => (
                            <option key={index} value={category}>{category}</option>
                        ))}
                    </select>
                </div>
            </div>
            <button className="submit-button" type="submit">Inserir valor</button>
        </form>
    )
}
export default Form;