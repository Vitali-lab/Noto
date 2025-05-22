import { useState } from 'react'
import styles from './Block3.module.css'
import { MdOutlineLogin, MdAppRegistration } from "react-icons/md";


export const Block3 = (props) => {

    const [animation, setAnimation] = useState(styles.unActive)
    
        setTimeout(() => {
            setAnimation(styles.active)
        }, 100)

    return (
        <>
        <div className={`${styles.startMenuBlock3} ${animation}`} >
           <h2 className ={styles.about}>Как это работает?</h2>
           <ul className={styles.list}>
            <li>Добавь задачу – напиши, что нужно сделать.</li>
            <li>Планируй – установи дату и категорию.</li>
            <li>Выполняй – отмечай готовые дела.</li>
            <li>Повторяй – становись продуктивнее каждый день!</li>
           </ul>
           <p className={styles.start}>Начни сейчас – бесплатно и без лишних хлопот!</p>
           <div className={styles.singUpButtons}>
            <button onClick={props.openLoginInMenu}>Войти <MdOutlineLogin /></button>
            <button onClick={props.openSingUpMenu}>Регистрация <MdAppRegistration /></button>
        </div>
        </div>
        
            
           
        </>
    )
}