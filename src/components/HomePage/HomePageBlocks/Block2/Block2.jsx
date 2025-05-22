import { useState } from 'react'
import styles from './Block2.module.css'
import { IoRocketOutline } from "react-icons/io5";

export const Block2 = (props) => {


    const [animation, setAnimation] = useState(styles.unActive)
    
        setTimeout(() => {
            setAnimation(styles.active)
        }, 100)
    


    return (
        <>
        <div className={`${styles.startMenuBlock2} ${animation}`}>
           <h2 className={styles.info}>Почему Noto?</h2>
           <ul className={styles.list}>
            <li>Простота – интуитивно понятный интерфейс</li>
            <li>Гибкость – создавай задачи, устанавливай сроки и приоритеты</li>
            <li>Доступность – синхронизация между устройствами</li>
            <li>Мотивация – отмечай выполненные дела и чувствуй удовлетворение</li>
           </ul>
           <div className={styles.singUpButtons}>
                           <button onClick={()=> {
                               props.setIdBlock(3)
                           }}>Осталось немного <IoRocketOutline /> </button>
                       
                       </div>
            
        </div>    
        </>
    )
}