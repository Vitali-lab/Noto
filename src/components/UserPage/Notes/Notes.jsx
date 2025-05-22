import styles from './Notes.module.css'
import { MdDeleteOutline } from "react-icons/md";

export const Notes = (props)=> {


    return (
        <div>
             <div className={styles.notes}>
                <input type="text" placeholder='Напишите название заметки...' value={props.inputValue} onChange={(e)=>{
                        props.setInputValue(e.target.value)
                     }} />
                    <button onClick={props.addNote} >Добавить заметку</button>
                  </div>
                  <ul>
                    {props.userItemsArr.map((el)=>{
                        return(
                    <div className={styles.note} key={el.id} onClick={()=>{
                        props.setTarget(el.id)
                        props.setIsNoteOpen(true)}}>
                    <li className={styles.noteName} >{el.noteName}</li>
                    <p>{el.date}</p>
                    <button className={styles.buttonDel} onClick={(e)=>{
                    e.stopPropagation()
                    props.deleteNote(el.id) 
                    }}><MdDeleteOutline /></button>
                    
                    </div>
                        )
                    })}
                  </ul>
                  </div>
    )
} 