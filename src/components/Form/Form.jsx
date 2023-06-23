import validation from '../Validation/Validation';
import style from './Form.module.css'
import { useState } from 'react';
import imgLogin from '../../assets/imgLogin.png'

const Form = ({ login }) => {
    const [errors, setErrors] = useState({})
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const handleChangeLogin = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation ({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return(
        <form onSubmit={handleSubmit} className={style.loginContainer}>
            <div className={style.loginForm}>
                <div>
                    <img src={imgLogin} />
                    <h2 className={style.tittle}>Go into multiverse</h2>
                </div>

                <div>
                    <label className={style.loginLabel} htmlFor="email">Email: </label>
                    <input className={style.loginInput} type="email" name="email" value={userData.email} onChange={handleChangeLogin}/>
                    {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
                    <hr />
                </div>

                <div>
                    <label className={style.loginLabel} htmlFor="password">Password: </label>
                    <input className={style.loginInput} type="password" name="password" value={userData.password} onChange={handleChangeLogin}/>
                    {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}
                </div>

                <div>
                    <button className={style.loginButton}>Log In</button>
                </div>
            </div>
        </form>
    )
}

export default Form;