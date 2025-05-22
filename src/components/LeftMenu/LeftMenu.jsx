import {React, useEffect, useState} from 'react';
import './LeftMenu.css'
import { FaHome, FaSearch } from "react-icons/fa";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md"
import { IoCreate } from "react-icons/io5";
import { Logo } from '../Logo/Logo';
import { FaRegNoteSticky } from "react-icons/fa6";
export const LeftMenu = (props) => {

    const [menuOpen, setMenuOpen] = useState(false)
     
         const toggleMenuLeft = () => {
             setMenuOpen(()=>{
               return  !menuOpen
             })
         } 
         
         


         function menuOut() {
          let a = setTimeout(()=>{setMenuOpen(true)},1000) 
          if(!menuOpen) {
            return a
          } else {
            return a = '' 
          }
         }
    menuOut()

    return (
        <div className={`left-menu ${!menuOpen?'left-menu_close':''}`}>
          <Logo/>
            <button className={`button-left_menu ${!menuOpen?'button-left_menu_close':''}`} onClick={toggleMenuLeft}><MdKeyboardDoubleArrowLeft className='button' /></button>
          <div className="user-info">
            <img src="https://png.klev.club/uploads/posts/2024-05/png-klev-club-mnr9-p-anonim-png-13.png" alt="User" />
            <h2>{props.name}</h2>
          </div>
          <div className="menu-list">
            <ul>
                <li onClick={()=>{
                  props.setUserPage(true)
                  props.setNotes(false)
                  props.setSearch(false)
                }}><FaHome /> Главная</li>
                <li onClick={()=>{
                  props.setSearch(true)
                  props.setUserPage(false)
                  props.setNotes(false)
                }}><FaSearch />Поиск</li>
                <li onClick={()=>{
                  props.setNotes(true)
                  props.setUserPage(false)
                  props.setSearch(false)
                }} ><FaRegNoteSticky/>Заметки</li>
                
            </ul>
            <div className='button-out'>
            <button onClick={()=>{
              localStorage.removeItem('User')
              location.reload()
            }}>Выход</button>
            </div>
          </div>
        </div>
    )
}