import {React, useState } from 'react';
import styles from './HomePage.module.css'
import { SingUp } from '../SingUpPage/SingUp';
import { Block1 } from './HomePageBlocks/Block1/Block1';
import { Block2 } from './HomePageBlocks/Block2/Block2';
import { Block3 } from './HomePageBlocks/Block3/Block3';
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { LoginIn } from '../LoginInPage/LoginIn';


export const HomePage = (props) => {


    const date = new Date().toISOString().substring(11,19)
    
    const [time, setTime] = useState(date)
    setTimeout(()=>{
        setTime(time)  
    },1000)

    const [openSingUp, setOpenSingUp]= useState(false)
    const [openLogIn, setOpenLogIn]= useState(false)
    const [idBlock, setIdBlock] = useState(1)
    
    
       
    

   function nextBlock() {
    setIdBlock(idBlock + 1)
    if (idBlock >= 3 ) {
       setIdBlock(1) 
       
    }
   }
   function prevBlock() {
    setIdBlock(idBlock - 1)
    if (idBlock <= 1 ) {
       setIdBlock(3) 
    }
   }
 

    function openSingUpMenu () {
        setOpenSingUp(true)
    }
     function openLoginInMenu () {
        setOpenLogIn(true)
    }

    function bloks() {
        if (idBlock === 1 ) {
       return <Block1 setIdBlock = {setIdBlock} openSingUpMenu = {openSingUpMenu} openLoginInMenu = {openLoginInMenu} />
    } else if (idBlock === 2) {
        return <Block2 setIdBlock = {setIdBlock}/>
    }else if (idBlock === 3) {
        return <Block3 openSingUpMenu = {openSingUpMenu} openLoginInMenu = {openLoginInMenu}/>
    }
}
    




    return(
        <div className={styles.homePage}>
           <SingUp openSingUp = {openSingUp} setOpenSingUp={setOpenSingUp} setUserList= {props.setUserList} />
           {openLogIn && <LoginIn openLogIn = {openLogIn} setOpenLogIn = {setOpenLogIn} setRegisteredUser = {props.setRegisteredUser} openLoginInMenu={openLoginInMenu}  />}
        <div className={styles.block}>
            {bloks()}
        </div> 
             <div className={styles.menus}>
             <button className={idBlock === 1? styles.active:''} onClick={()=>{setIdBlock(1)}}></button>
             <button className={idBlock === 2? styles.active:''} onClick={()=>{setIdBlock(2)}}></button>
             <button className={idBlock === 3? styles.active:''} onClick={()=>{setIdBlock(3)}}></button>   
             </div> 
             <div className={styles.toggle }>
                <button className={idBlock === 1?styles.unviseble:''} onClick={prevBlock}><SlArrowLeft /></button>
                <button className={idBlock === 3?styles.unviseble:''} onClick={nextBlock}><SlArrowRight /></button>
            </div>  
        </div>

    
    )
}