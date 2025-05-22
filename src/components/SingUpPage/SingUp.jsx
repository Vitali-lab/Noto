import './SingUp.css'
import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { FaRegEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";

export const SingUp = (props) => {

const [showPassword, setShowPassword] = React.useState(false)
const [showPassword2, setShowPassword2] = React.useState(false)
const [inputValueName, setInputValueName] = React.useState('')
const [inputValueLogin, setInputValueLogin] = React.useState('')
const [inputValuePassword, setInputValuePassword] = React.useState('')
const [inputValuePassword2, setInputValuePassword2] = React.useState('')
const [errorWindow, setErrorWindow] = React.useState(false)
const [errorLogin , setErrorLogin] = React.useState(false)

const openEye = <FaEyeSlash />
const closeEye = <FaRegEye />

const newUser = {
    name: inputValueName,
    login: inputValueLogin,
    password: inputValuePassword,
    userNotes: []
}
function addUser () {

let users = localStorage.getItem('Users')
users = JSON.parse(users)
console.log(users);

const checkUserLogin = users.some((el)=>{return el.login === inputValueLogin})
if (checkUserLogin) {
    setErrorLogin(true)
    setInputValueLogin('')
} else {
    setErrorLogin(false)
}


if(inputValuePassword !== inputValuePassword2 ){
    props.setOpenSingUp(true)
    setErrorWindow(true)
} else if(!inputValueName||!inputValueLogin||!inputValuePassword ){
    setErrorWindow(true)

} else {
props.setUserList(prev => [...prev,newUser])
props.setOpenSingUp(false)
setInputValueName('')
setInputValueLogin('')
setInputValuePassword('')
setInputValuePassword2('')
}
}



function clickOnEye() {
    setShowPassword(()=>{
        return !showPassword
   })
}

function clickOnEye2 (){
    setShowPassword2(()=>{
        return !showPassword2
    })
}

    return(
       ( props.openSingUp && 
        <div className="singUp-page">
            <div className="singUp-menu">
                <button className='exit'onClick={()=>{
                    props.setOpenSingUp(false)
                }}><RxCross2 /></button>
                <div className="singUp-inputs">
                  <div className='singUp-text'>
                  <h2>Регистрация</h2>
                  </div>
                 <p>Введите имя</p>
                <input type="text" value={inputValueName} onChange={(event)=>{
                    setInputValueName(event.target.value)
                }}/>
                <p>Введите Логин</p>
                <input type="text" value={inputValueLogin} onChange={(event)=>{
                    setInputValueLogin(event.target.value)
                }}/>
                <p>Введите пароль</p>
                <input type={`${!showPassword? 'password': 'text'}`} value={inputValuePassword} onChange={event=>{
                    setInputValuePassword(event.target.value)
                }}/>
                <button className='showPassword'onClick={clickOnEye}>{showPassword?closeEye:openEye}</button>
                <p>Повторите пароль</p>
                <input type={`${!showPassword2? 'password': 'text'}`} value={inputValuePassword2} onChange={(event)=>{
                    setInputValuePassword2(event.target.value)
                }}/>
                <button className='showPassword2'onClick={clickOnEye2}>{showPassword2?closeEye:openEye}</button>
                {errorWindow && <div className='passwordError'><p>Пароли не совпадают</p></div>}
                {errorLogin && <div className='loginError'><p>Такой Логин уже существует</p></div>}
                </div>
                <div className="singUp-button">
                    <button onClick={addUser}>Зарегистрироваться</button>
                </div>
                

            </div>
        </div>)
    )
}