import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';


const URL = 'http://localhost:3001/rickandmorty/login/';
// const email = 'jere@gmail.com';
// const password = 'henry1';


function App() {
   const location = useLocation();
   const navigate = useNavigate();
   

   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false);


   const login = async (userData) => {
      try {
         const { email, password } = userData;
         const { data } = await axios(URL + `?email=${email}&password=${password}`);
         const { access } = data;
            
         setAccess(data);
         access && navigate('/home');

      } catch (error) {
         console.log(error.message)
      }
      
   }


   const logout = () => {
         setAccess(false)
         navigate('/')
      }

      
   useEffect (() => {
      !access && navigate('/')
   }, [access])


   const onSearch = async (id) => {
      try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         }

      } catch (error) {
         alert('¡No hay personajes con este ID!');
      }
   };
   

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== Number(id))
      setCharacters(charactersFiltered)
   }
   

   return (
      <div className='App'>
         {
            location.pathname !== '/' && <Nav onSearch={onSearch} logout={logout}/>
         }

         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/abot' element={<About/>}/>
            <Route path='/favorites' element={<Favorites/>} />
            <Route path='/detail/:id' element={<Detail/>}/>
         </Routes>

      </div>
   );
}

export default App;