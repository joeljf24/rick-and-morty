import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState ({}) // Estado y funcion que me permite modificar el estado [state, fn()]

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);  // No olvidarse del ID porque genera un loop donde la API te banea


    return(
        <div>  
            <h1>{character?.name}</h1>
            <h2>{character?.status}</h2>
            <h2>{character?.species}</h2>
            <h2>{character?.gender}</h2>
            <h2>{character?.origin?.name}</h2>
            <img src={character?.image} alt={character?.name} />
        </div>
    )
}

export default Detail;