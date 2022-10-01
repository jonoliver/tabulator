import { useState } from "react";
import { mergeDeepRight } from 'ramda';
import styles from './riff.module.css';

type ID = string;

type Fret = {
  id: ID,
  number?: number
};

// lol thx for overloading the term `string`, CS
type Strung = {
  id: ID,
  notes: Fret[]
};

type Riff = {
  strungs: Strung[]
};

const mockState: Riff = {
  strungs: [
    {
      id: 'string-1',
      notes: [
        {
          id: 'note-1',
          number: 1
        },
        {
          id: 'note-2',
        },
      ]
    },
    {
      id: 'string-2',
      notes: [
        {
          id: 'note-1',
          number: 1
        },
        {
          id: 'note-2',
        },
      ]
    }
  ]
}
const Riff = () => {
  const [riff, setRiff] = useState(mockState);
  const setNote = (strungId: ID, noteId: ID) => {
    const strung = riff.strungs.find(x => x.id === strungId);
    const note = strung?.notes.find(x => x.id === noteId);
    console.log(riff.strungs.find(x => x.id === strungId)?.notes.find(x => x.id === noteId))
  }
  return <div className={styles.riff}>
    {
      riff.strungs.map((strung) =>
        <div key={strung.id} className={styles.string}>
          {
            strung.notes.map((note) => note.number
              ?
              <div key={note.id} className={styles.fret}>
                <span className={styles.number}>{note.number}</span>
              </div>
              :
              <div
                key={note.id}
                className={`${styles.fret} ${styles.empty}`}
                onClick={() => setNote(strung.id, note.id)}
              />
            )
          }
        </div>)
    }
  </div>
}

export default Riff;