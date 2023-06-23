import { useState } from 'react';
import style from './SearchBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
   
export default function SearchBar({onSearch}) {
   const [id, setId] = useState('');

   const handleChangeSearch = (event) => {
      setId(event.target.value);
   }

   return (
      <div>
         <div action="" className={style.searchBar}>
            <input placeholder='Intro ID (1-826)' type='search' onChange={handleChangeSearch} value={id}/>
            <button onClick={() => {onSearch(id); setId('')}}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
         </div>
      </div>
   );
}