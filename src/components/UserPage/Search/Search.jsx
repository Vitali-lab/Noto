import { useState, useEffect } from 'react';
import styles from './Search.module.css'



export const Search = (props) => {


    
  const [searchValue, setSearchValue] = useState('');
  const [filteredNotes, setFilteredNotes] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('User'));
    if (!user || !user.userNotes) return;

    const userNotes = user.userNotes;
  
    const result = userNotes.filter((el) =>
      el.note.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredNotes(result);
    console.log(result);
    
  }, [searchValue]); 

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Поиск по заметкам..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      {searchValue && (
        <div className={styles.results}>
          {filteredNotes.length > 0 ? (
            filteredNotes.map((note, index) => (
              <div key={index} className={styles.noteItem}>
                <div className={styles.note}>
                    <p onClick={()=>{
                        props.setIsNoteOpen(true)
                    }}>{note.noteName}</p>
                    
                </div>
              </div>
            ))
          ) : (
            <div className={styles.noResults}>Ничего не найдено</div>
          )}
        </div>
      )}
    </div>
  );
};