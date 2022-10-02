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
  const noteClassNames = [styles.fret, !hasNote && styles.empty].filter(Boolean).join(' ');
  return (
    <div
      className={noteClassNames}
      onClick={setNote}
    >
      <Show when={hasNote}>
        <span className={styles.number}>{note.number}</span>
      </Show>
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

  return <div className={styles.riff}>
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
    <input
      type="number"
      min="0"
      max="25"
      style={{ width: '5rem', padding: '0.5rem', paddingRight: '0', margin: 'auto' }}
      value={pasteValue}
      onChange={(e) => setPasteValue(parseInt(e.target.value, 10))}
    />
  </div>
}

export default Riff;