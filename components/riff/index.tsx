import { MouseEventHandler, useState, useEffect } from "react";
import produce from "immer";
import { useRouter } from 'next/router'
import { stateToUrlParams, urlParamsToState } from '../../utils/url';
import styles from './riff.module.css';

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

const mergeWithEmptyRiff = (riff: Riff, notes = 12) => {
  const newRiff = {
    strungs: Array(riff.strungs.length).fill({}).map((_, s) => ({
      notes: Array(notes).fill({}).map((_, n) => (riff.strungs[s].notes[n] || {}))
    }))
  }
  return newRiff;
}

// thx typescript https://github.com/microsoft/TypeScript/pull/49636
const findLastIndex = (arr: any[], condition: any) => {
  const reverseIndex = [...arr].reverse().findIndex(condition);
  return reverseIndex > -1
    ? arr.length - reverseIndex
    : -1;
}

const truncateRiff = (riff: Riff): Riff => {
  const maxNoteLength = Math.max(
    ...riff.strungs.map(strung =>
      findLastIndex(strung.notes, (note: Fret) => note.number !== undefined)
    ));

  const strungs = riff.strungs.map(strung => ({
    notes: strung.notes.slice(0, maxNoteLength)
  }))
  return { strungs };
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
  const noteClassNames = buildClasses([styles.number, !hasNote && styles.empty]);
  return (
    <div
      className={styles.fret}
      onClick={setNote}
    >
      <span className={noteClassNames}>{note.number}</span>
    </div>
  )
}

type EditButtonProps = {
  isEdit: boolean,
  setIsEdit(isEdit: boolean): void,
}

const EditButton = ({ isEdit, setIsEdit }: EditButtonProps) => {
  return <button onClick={() => setIsEdit(!isEdit)}>{isEdit ? 'Done' : 'Edit'}</button>
}

const Riff = () => {
  const [riff, setRiff] = useState(mockState);
  const [isEdit, setIsEdit] = useState(true);
  const [pasteValue, setPasteValue] = useState(0);
  const router = useRouter();

  const mergedRiff = mergeWithEmptyRiff(riff, 50);
  const truncatedRiff = truncateRiff(mergedRiff);
  const renderRiff: Riff = isEdit ? mergedRiff : truncatedRiff;

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const riffParam = query.get('r');
    if (riffParam) {
      const riffFromQuery = urlParamsToState(riffParam);
      setRiff(riffFromQuery);
      setIsEdit(false);
    }
  }, [])

  const setNote = (strungIndex: number, noteIndex: number) => {
    if (!isEdit || isNaN(pasteValue)) return;
    const newRiff = produce((draft) => {
      const note = draft.strungs[strungIndex]?.notes[noteIndex];
      if (note) {
        note.number = note.number === pasteValue ? undefined : pasteValue;
      }
    })(mergedRiff);
    const truncatedRiff = truncateRiff(newRiff);
    router.push(`?${stateToUrlParams(truncatedRiff)}`, undefined, { shallow: true })
    setRiff(newRiff);
  }

  return <div className={isEdit ? styles.edit : ''}>
    <div style={{ overflowX: 'scroll' }}>
      <div className={styles.riff}>
        {
          renderRiff?.strungs.map((strung, s) =>
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
      <Show when={isEdit}>
        <>
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
        </>
      </Show>
      <EditButton {...{ isEdit, setIsEdit }} />
    </p>
  </div>
}

export default Riff;