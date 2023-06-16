import SearchBar from '../SearchBar/SearchBar';
import { NavLink } from 'react-router-dom';
import style from './Nav.module.css';
import { RandomIcon } from './styled.components';
import { faShuffle, faHouse } from '@fortawesome/free-solid-svg-icons';


const Nav = ({ onSearch, logout }) => {
    
    const randomize = () => {
        for (let i = 0; i < 4; i++) {
            onSearch(Math.floor(Math.random() * 826));
        }
    }
    
    return (
        <nav className={style.topBar}>
            
            <button>
                <NavLink icon={faHouse} to='/home'>HOME</NavLink>
            </button>

            <button>
                <NavLink to='/about'>ABOUT</NavLink>
            </button>

            <RandomIcon icon={faShuffle} onClick={randomize}></RandomIcon>

            <SearchBar onSearch={onSearch}/>

            <button onClick={logout}>LogOut</button>
        </nav>
    )
}

export default Nav;

// 
// Que virgo
//     {
    //     let haveIt = [];
//     let random = (Math.random() * 826).toFixed();
//     random = Number(random);

//     if(!haveIt.includes(random)) {
    //        haveIt.push(random);
    //        fetch(`https://rickandmortyapi.com/api/character/${random}`)
    //        .then((response) => response.json())
    //        .then((data) => {
        //           if (data.name) {
            //              setCharacters((oldChars) => [...oldChars, data]);
            //           } else {
                //              alert('¡No hay personajes con este ID!');
                //           }
                //        });
                //     }
                //     else {
                    //        alert('Ya agregaste a todos los personajes')
                    //        return false
                    //     }
//  }

                    // const random = []; 
                    
                    // for (let i = 0; i < 3; i++) {
                    //     random.push(Math.floor(Math.random() * 826))
                    // }
                    
                    // for (let i = 0; i < 3; i++) {
                    //     onSearch(random[i]);
                    // }