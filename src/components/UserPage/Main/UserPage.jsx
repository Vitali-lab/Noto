import { useState } from 'react'
import styles from './UserPage.module.css'
import { OpenNote } from '../Notes/OpenNote/OpenNote'
import { getFormattedDateTime } from '../../func/data'
import { Notes } from '../Notes/Notes';
import { Home } from '../Home/Home';
import { Search } from '../Search/Search';

export const UserPage = (props) => {

    function getHours() {
    const hours = new Date().getHours()
    if (hours <= 12 && hours >= 5 ) {
        return 'Доброе утро '
    } else if (hours <= 17 && hours >= 13 ) {
        return 'Добрый день '
    } else if (hours <= 23 && hours >= 18 ) {
        return 'Добрый вечер '
    }else if (hours <= 4 && hours >= 1 ) {
        return 'Доброй ночи '
    }
    }

    
    
    let userItems = localStorage.getItem('User')
    userItems = JSON.parse(userItems)
    
    
    

    let usersItems = userItems.userNotes
    const [inputValue , setInputValue] = useState('')
    const [userItemsArr , setUserItemsArr] =  useState(usersItems)
    const [isNoteOpen, setIsNoteOpen] = useState(false)
    const [target , setTarget] = useState('')

    
        
     const addNote = () => {
    if (!inputValue.trim()) return
    
    const newNote = {
      id: Date.now(),
      noteName: inputValue,
      date: getFormattedDateTime(),
      note: '',
    };

    setUserItemsArr(prev => {
      const updatedNotes = [...prev, newNote]
      const updatedUserData = { ...userItems, userNotes: updatedNotes }
      localStorage.setItem('User', JSON.stringify(updatedUserData))
      let users = localStorage.getItem('Users')
      users = JSON.parse(users)
      users.forEach((el)=> {
       if (el.login === userItems.login) {
        el.userNotes = updatedNotes
       }}) 
       localStorage.setItem('Users', JSON.stringify(users))
      return updatedNotes
    });

    setInputValue('')
  };
    
     const deleteNote = (id) => {
    setUserItemsArr(prev => {
      const updatedNotes = prev.filter(note => note.id !== id);
      const updatedUserData = { ...userItems, userNotes: updatedNotes };
      localStorage.setItem('User', JSON.stringify(updatedUserData));
      let users = localStorage.getItem('Users')
      users = JSON.parse(users)
      users.forEach((el)=> {
       if (el.login === userItems.login) {
        el.userNotes = updatedNotes
       }}) 
      localStorage.setItem('Users', JSON.stringify(users))
      
      return updatedNotes;
    });
  };
     
  

   




    return(
        <>
       
        <div className={styles.userPage}>
          <div className={styles.helloUser}>
            <h2>{getHours()} {props.name} !</h2>
          </div>
          {props.userPage && <Home/>}
          {props.search && <Search setIsNoteOpen={setIsNoteOpen}/>}
          {props.notes && <Notes inputValue = {inputValue}
           setInputValue = {setInputValue}
           addNote ={addNote}
           userItemsArr = {userItemsArr}
           setTarget = {setTarget}
           setIsNoteOpen= {setIsNoteOpen}
           deleteNote ={deleteNote}/>
          }
          {isNoteOpen && <OpenNote setIsNoteOpen={setIsNoteOpen} target = {target} userItems={userItems}  />}
        </div>
        </>
    )
}