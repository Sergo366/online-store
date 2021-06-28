import React from "react"
import s from './Authorization.module.css'
import {useHistory} from "react-router-dom"
import {Field, reduxForm} from 'redux-form'


const Authorization = ({ handleSubmit }) => {

    let history = useHistory()

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <form onSubmit={handleSubmit}>
                    <div className={s.login}>
                        <label htmlFor='username'>Эл. почта или телефон</label>
                        <Field component='input' type="text" name='username'/>
                    </div>
                    <div className={s.password}>
                        <label htmlFor='password'>Пароль</label>
                        <Field component='input' type="password" name='password'/>
                    </div>
                    <div className={s.row__button}>
                        <div className={s.enter}>
                            <button type='submit'>Войти</button>
                        </div>
                        <div className={s.enter}>
                            <button type='submit'>Зарегистрироваться</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default reduxForm({
    form: 'registration'
})(Authorization)