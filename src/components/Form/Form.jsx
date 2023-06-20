import validation from '../Validation/Validation';
import style from './Form.module.css'
import { useState } from 'react';

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
        <form onSubmit={handleSubmit} className={style.login}>
            <div className={style.loginContainer}>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" value={userData.email} onChange={handleChangeLogin}/>
                    {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
                    <hr />
                </div>

                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" value={userData.password} onChange={handleChangeLogin}/>
                    {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}
                    <hr />
                </div>

                <div>
                    <button>Submit</button>
                </div>
            </div>
        </form>
    )
}

export default Form;