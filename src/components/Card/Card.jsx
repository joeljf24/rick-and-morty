import { NavLink } from 'react-router-dom'
import style from './Card.module.css';

export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   return (
      <div className={style.cardContainer}>
         
         <div> 
            <button className={style.closeButton} onClick={() => onClose(id)}>X</button>
         </div>
         
         <div className={style.imageContainer}>
            <img className={style.characterImage} src={image} alt='' />
         </div>

         <div>
            <NavLink className={style.link} to={`/detail/${id}`}>
               <h2 className={style.name}>{name}</h2>
            </NavLink> 
         </div>

         {/* <div>
            <h2>{species}</h2>
            <h2>{gender}</h2>
            <h2>{status}</h2>
            <h2>{origin}</h2>
         </div> */}
      </div>
   );
}
