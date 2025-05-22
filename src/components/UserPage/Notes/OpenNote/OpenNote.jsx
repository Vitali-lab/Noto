import { useEffect, useState } from 'react'
import styles from './OpenNote.module.css'

export const OpenNote = (props)=>{

    
    const [text, setText] = useState('')
    useEffect(()=>{
        
        const savedText = props.userItems.userNotes.find((el)=> el.id === props.target).note
        if(savedText){
            setText(savedText)
        }
    },[])
    
   
   
   
   function noteName() {
    let noteName  =  props.userItems.userNotes.find((el)=> el.id === props.target)
    return noteName.noteName
   }
   

  

  function saveNote() {
   let saveNot  =  props.userItems.userNotes.find((el)=> el.id === props.target)
   saveNot.note = text
   localStorage.setItem('User', JSON.stringify(props.userItems))
   let users = localStorage.getItem('Users')
      users = JSON.parse(users)
      users.forEach((el)=> {
       if (el.login === props.userItems.login) {
        el.userNotes.forEach((e) => {
            if (e.id === props.target ) {
              e.note = text
            } 
        })
       }}) 
       
      localStorage.setItem('Users', JSON.stringify(users))

  }

 


    return(
        <>
        
         <div className={styles.openNoteBlock}>
          <div className={styles.openNote}>
            <button className={styles.buttonClose} onClick={()=>{props.setIsNoteOpen(false)}}>X</button>
            <div className={styles.noteName}>
             Заметка: {noteName()}
            </div>
            <div className={styles.inputDiv}>
                <textarea value={text} type="text" onChange={(e)=>{
                    
                    setText(e.target.value)}}/>
            </div>
            <div className={styles.buttonSave}> <button onClick={saveNote} >Сохранить</button></div>
         </div>
        </div>
       </>
    )
}