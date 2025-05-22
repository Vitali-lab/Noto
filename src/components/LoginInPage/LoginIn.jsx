import React from 'react';
import styles from './LoginIn.module.css'
import { RxCross2 } from "react-icons/rx";
import { TiTimesOutline } from "react-icons/ti";
import { FaRegUserCircle } from "react-icons/fa";

export const LoginIn = (props) => {

    const [inputValueLogin, setInputValueLogin] = React.useState('')
    const [inputValuePassword, setInputValuePassword] = React.useState('')

    function getUser() {
       let user =  localStorage.getItem('Users')
       user = JSON.parse(user)
       let registrUser = user.find((el)=>{return el.login === inputValueLogin})
       if (!registrUser) {
       console.log('неверный логин и пароль') 
       setInputValueLogin('')
       setInputValuePassword('')
       } else if(registrUser.password !== inputValuePassword) {
        console.log('неверный пароль') 
        setInputValuePassword('')
       } else {
        props.setOpenLogIn(false)
        props.setRegisteredUser(true)

        localStorage.setItem('User',JSON.stringify(registrUser))
       }

       
    }



    return(

        <div className={styles.loginInMemu}>
           <div className={styles.form}>
            <button className={styles.exitButton}onClick={()=>{
            props.setOpenLogIn(false)
            }}><TiTimesOutline /></button>
             <div className={styles.input}>
                <p>Войти</p>
            <input type="text" value={inputValueLogin} placeholder='Логин' onChange={(e)=>{
                setInputValueLogin(e.target.value)
            }}/>
            <input type="password" value={inputValuePassword} placeholder='Пароль' onChange={(e)=>{
                setInputValuePassword(e.target.value)
            }} />
            </div>
            <button className={styles.buttonLogin} onClick={getUser}>Войти</button>
           </div>
        </div>
    )
}