import Imagem from '../../Nu Kenzie White.png';
import Boxes from '../../Group 262.png';
import './style.css';

const HomePage =  ({setIsHome}) =>  {
    return(
        <div className='background'>
            <div className='writings'>
                    <img src={Imagem} alt="logo Kenzie" />
                    <h2>Centralize o controle das suas finanças</h2>
                    <h6>de forma rápida e segura</h6>
                    <button className='btnIniciar' onClick={() => setIsHome(false)}>Iniciar</button>
            </div>
            <img className='elipses' src={Boxes} alt="caixas e circunferências" />
        </div>
    )
}
export default HomePage;