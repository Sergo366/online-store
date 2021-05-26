import React from "react"
import s from './MyAccount.module.css'

const MyAccount = () => {


    return (
      <div className={s.wrapper}>
          <div className={s.container}>
              <div className={s.photo}>
                  <img src='https://images11.cosmopolitan.ru/upload/custom/c51/c5187708a000a7c17ff48835d35285dd.jpg' alt=""/>
              </div>
              <div className={s.description}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, voluptatibus!</p>
                  <br/>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, voluptatibus!</p>
                  <br/>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, voluptatibus!</p>
              </div>
          </div>
      </div>
    )
}

export default MyAccount