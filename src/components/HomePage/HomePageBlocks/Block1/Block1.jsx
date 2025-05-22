import { useState } from 'react'
import styles from './Block1.module.css'
import { LuNotebookPen } from "react-icons/lu";
import { IoRocketOutline } from "react-icons/io5";

export const Block1 = (props) => {

 
    const [animation, setAnimation] = useState(styles.unActive)


    setTimeout(() => {
        setAnimation(styles.active)
    }, 100)


    return (
        <>
        <div className = {`${styles.startMenuBlock1} ${animation}`}  >
            <h2 className={styles.greetings}><LuNotebookPen /> Организуй свою жизнь<br /> с Noto</h2>
            <span className={styles.about}>Добро пожаловать в простое и удобное приложение для управления задачами. Создавай списки дел, отслеживай прогресс и ничего не упускай из виду!</span>
            <div className={styles.singUpButtons}>
                <button onClick={()=> {
                    setAnimation(styles.unActive)
                    props.setIdBlock(2) 
                    setAnimation(styles.unActive)
                }}>Давай уже начнём <IoRocketOutline /> </button>
            
            </div>
            
        </div>    
        </>
    )
}