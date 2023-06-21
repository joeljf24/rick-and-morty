import { NavLink } from 'react-router-dom'
import style from './Card.module.css';
import { addFav, removeFav } from '../Redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

function Card({id, name, status, species, gender, origin, image, onClose, myFavorites, addFav, removeFav}) {
   
   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false);
         removeFav({id});
      }
      else {
         setIsFav(true);
         addFav({ id, name, species, gender, image })
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.cardContainer}>
         
         <div className={style.imageContainer}>
            <div>
               <button className={style.closeButton} onClick={() => onClose(id)}>X</button>
               
               <img className={style.characterImage} src={image} alt='' />
               {/* <h2 className={style.characterId}>ID: {id}</h2> */}
               <hr />
            </div>

            <div>
               <div>
                  <h2 className={style.name}>{name}</h2>
               </div>

               <div>
                  <NavLink className={style.link} to={`/detail/${id}`}>
                     <h2>+</h2>
                  </NavLink> 
                  
                  <button onClick={handleFavorite}>{isFav? '❤️' : '🤍'}</button>
               </div>

            </div>
         </div>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return{
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}


export default connect (
   mapStateToProps,
   mapDispatchToProps
)(Card);