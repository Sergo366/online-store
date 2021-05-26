import React from "react"
import s from './Authorization.module.css'
import { useHistory } from "react-router-dom";


const Authorization = ({authorizationUser}) => {

    let history = useHistory()

    const authorization = (event) => {
        event.preventDefault()
        authorizationUser(true)
        setTimeout(() => {
            history.push("/myaccount")
        }, 1000)

    }

    // const nodes = event.target.childNodes
    //
    // for (let i = 0; i < nodes.length - 1; i++) {
    //     if (!nodes[i].lastChild.value) return
    //     console.log('hello')
    // }
    // console.log(event.target.childNodes)
    return(
        <div className={s.wrapper}>
            <div className={s.container}>
                <form action="" onSubmit={authorization} >
                    <div className={s.login}>
                        <p>Эл. почта или телефон</p>
                        <input type="text"/>
                    </div>
                    <div className={s.password}>
                        <p>Пароль</p>
                        <input type="password"/>
                    </div>
                    <div className={s.enter}>
                        <button type='submit'>Войти</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Authorization