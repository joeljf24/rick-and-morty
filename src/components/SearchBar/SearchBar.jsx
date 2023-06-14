import { useState } from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { SearchIcon } from './styled.components';
   
export default function SearchBar({onSearch}) {
   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value);
   }

   return (
      <div>
         <input placeholder='Intro ID (1-826)' type='search' onChange={handleChange} value={id}/>
         <SearchIcon icon={faMagnifyingGlass} onClick={() => {onSearch(id); setId('')}}></SearchIcon>
      </div>
   );
}
