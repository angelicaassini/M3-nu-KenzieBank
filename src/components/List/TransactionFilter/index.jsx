import './style.css';


const TransactionFilter = ({categories, setFilter}) => {

    return(
        <div className="filter-buttons">
            <h2>Resumo financeiro</h2>
            <nav>
                <button className='todos-buttons'  onClick={() => setFilter("")}>Todos</button>
                {categories.map(category => (
                    <button className='category-buttons' key={category} onClick={() => setFilter(category)}>{category}</button>
                ))}
            </nav>
        </div>
    )
}
export default TransactionFilter;