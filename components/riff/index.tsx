import { MouseEventHandler, useState, useEffect } from "react";
import produce from "immer";
import { useRouter } from 'next/router'
import { stateToUrlParams, urlParamsToState } from '../../utils/url';
import styles from './riff.module.css';
type ID = string;

export type Fret = {
  number?: number
};

// lol thx for overloading the term `string`, CS
export type Strung = {
  notes: Fret[]
};

export type Riff = {
  strungs: Strung[]
};

const mockState: Riff = {
  strungs: Array(6).fill({}).map((_, i) => ({
    notes: Array(12).fill({}).map((_, n) => ({
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
  const router = useRouter();

  useEffect(() => {
    if (router.query.r) {
      const riffFromQuery = urlParamsToState(router.query.r as string);
      setRiff(riffFromQuery);
    }
  }, [router])

  const setNote = (strungIndex: number, noteIndex: number) => {
    if (isNaN(pasteValue)) return;

    setRiff(produce((draft) => {
      const note = draft.strungs[strungIndex]?.notes[noteIndex];
      if (note) {
        note.number = note.number === pasteValue ? undefined : pasteValue;
      }
      // this doesn't seem good?
      router.push(`?r=${stateToUrlParams(draft)}`, undefined, { shallow: true })
    }));
  }

  return <div>
    <div style={{ overflowX: 'scroll' }}>
      <div className={styles.riff}>
        {
          riff.strungs.map((strung, s) =>
            <div key={s} className={styles.string}>
              {
                strung.notes.map((note, n) =>
                  <Note key={n} note={note} setNote={() => setNote(s, n)} />
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