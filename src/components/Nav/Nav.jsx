import SearchBar from '../SearchBar/SearchBar';
import { NavLink } from 'react-router-dom';
import style from './Nav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faShuffle, faStar, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';


const Nav = ({ onSearch, logout }) => {
    
    const randomize = () => {
        for (let i = 0; i < 1; i++) {
            onSearch(Math.floor(Math.random() * 826));
        }
    }
    
    return (
        <nav className={style.navBar}>
            
            <div className={style.leftBar}>
                <NavLink to='/home'>
                    <button><FontAwesomeIcon icon={faHouse} /></button>
                </NavLink>

                <NavLink to='/about'>
                    <button><FontAwesomeIcon icon={faUser} /></button>
                </NavLink>

                <NavLink to='/favorites'>
                    <button><FontAwesomeIcon icon={faStar} /></button>
                </NavLink>
            </div>

            <div>
                <button onClick={randomize}><FontAwesomeIcon icon={faShuffle} /></button>
            </div>

            <div>
                <SearchBar onSearch={onSearch}/>
            </div>

            <div>
                <button onClick={logout}><FontAwesomeIcon icon={faRightFromBracket} /></button>
            </div>
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