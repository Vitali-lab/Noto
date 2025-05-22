import React, {useEffect, useState} from 'react'
import './App.css'
import { LeftMenu } from './components/LeftMenu/LeftMenu'
import { HomePage } from './components/HomePage/Home page'
import { UserPage } from './components/UserPage/Main/UserPage'

function App() {

  const [userList,setUserList] = useState(()=>{
    const users = localStorage.getItem('Users')
    return users? JSON.parse(users):[]
  })
  const [registeredUser , setRegisteredUser] = useState(false)
  const [openHomePage, setOpenHomePage] = useState(false)
  const [notes , setNotes] = useState(false)
  const [userPage , setUserPage] = useState(false)
  const [search , setSearch] = useState(false)


  useEffect(()=>{
    localStorage.setItem('Users',JSON.stringify(userList))
  },[userList])
  

  let loginUser = localStorage.getItem('User')
  loginUser = JSON.parse(loginUser)
  let name
  loginUser? name = loginUser.name: 'Guest'

  return (
    <div>
    {loginUser && <LeftMenu setOpenHomePage = {setOpenHomePage} setNotes={setNotes} name={name} setUserPage={setUserPage} setSearch= {setSearch}/>  }
    {!loginUser &&<HomePage setUserList = {setUserList} openHomePage = {openHomePage} setRegisteredUser = {setRegisteredUser} />}
    {loginUser && <UserPage  name={name} notes = {notes} userPage={userPage} search={search}  setOpenHomePage={setOpenHomePage}/>}
    </div>
   
  ) 
  
}

export default App
