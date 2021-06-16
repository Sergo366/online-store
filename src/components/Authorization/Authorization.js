import React from "react"
import s from './Authorization.module.css'
import {useHistory} from "react-router-dom";


const Authorization = ({authorizationUser, getDataFromServer}) => {

    let history = useHistory()

    const authorization = (event) => {
        event.preventDefault()

        const dataForms = {}

        const nodes = event.target.childNodes
        for (let i = 0; i < nodes.length - 1; i++) {
            if (!nodes[i].lastChild.value) return
            dataForms[nodes[i].lastChild.name] = nodes[i].lastChild.value
        }
        getDataFromServer(dataForms)

    }

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <form action="" onSubmit={authorization}>
                    <div className={s.login}>
                        <p>Эл. почта или телефон</p>
                        <input type="text" name='username'/>
                    </div>
                    <div className={s.password}>
                        <p>Пароль</p>
                        <input type="password" name='password'/>
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

export default Authorization