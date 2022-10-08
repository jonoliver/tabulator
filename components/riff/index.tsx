import { MouseEventHandler, useState } from "react";
import produce from "immer";
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
  strungs: Array(6).fill({}).map((_, i) => ({
    id: `string-${i}`,
    notes: Array(12).fill({}).map((_, n) => ({
      id: `string-${i}note-${n}`,
    }))
  }))
}

const buildClasses = (list: unknown[]) => list.filter(Boolean).join(' ');

type ShowProps = {
  when: boolean,
  children: JSX.Element,
}
const Show = ({ when, children }: ShowProps) => when ? children : null;

type NoteProps = {
  note: Fret,
  setNote: MouseEventHandler
}

const Note = ({ note, setNote }: NoteProps) => {
  const hasNote = note.number !== undefined;
  const noteClassNames = buildClasses([styles.fret, !hasNote && styles.empty]);
  return (
    <div
      className={noteClassNames}
      onClick={setNote}
    >
      <span className={styles.number}>{note.number}</span>
    </div>
  )
}

const Riff = () => {
  const [riff, setRiff] = useState(mockState);
  const [pasteValue, setPasteValue] = useState(0);
  const setNote = (strungId: ID, noteId: ID) => {
    if (isNaN(pasteValue)) return;

    setRiff(produce((draft) => {
      const note = draft.strungs
        .find(x => x.id === strungId)?.notes
        .find(x => x.id === noteId);
      if (note) {
        note.number = note.number === pasteValue ? undefined : pasteValue;
      }
    }));
  }

  return <div>
    <div style={{ overflowX: 'scroll' }}>
      <div className={styles.riff}>
        {
          riff.strungs.map((strung) =>
            <div key={strung.id} className={styles.string}>
              {
                strung.notes.map(note =>
                  <Note key={note.id} note={note} setNote={() => setNote(strung.id, note.id)} />
                )
              }
            </div>
          )
        }
      </div>
    </div>

    <p
      style={{ textAlign: 'center' }}
    >
      <button
        style={{ padding: '0.5rem 1rem' }}
        onClick={() => setPasteValue(pasteValue - 1)}
      >-</button>
      <input
        type="number"
        min="0"
        max="25"
        style={{ width: '5rem', padding: '0.5rem', paddingRight: '0', margin: 'auto' }}
        value={pasteValue}
        onChange={(e) => setPasteValue(parseInt(e.target.value, 10))}
      />
      <button
        style={{ padding: '0.5rem 1rem' }}
        onClick={() => setPasteValue(pasteValue + 1)}
      >+</button>
    </p>
  </div>
}

export default Riff;