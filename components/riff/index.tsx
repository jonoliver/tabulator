import { MouseEventHandler, useState, useEffect, useRef } from "react";
import produce from "immer";
import { useRouter } from 'next/router'
import { stateToUrlParams, urlParamsToState } from '../../utils/url';
import styles from './riff.module.scss';
import Header from '../header';
import { Show } from "../show";
import { EditPane } from "../controls";

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

const Riff = () => {
  const [riff, setRiff] = useState(mockState);
  const [isEdit, setIsEdit] = useState(true);
  const [pasteValue, setPasteValue] = useState(0);
  const pageLength = 40;
  const [editModeRiffLength, setEditModeRiffLength] = useState(pageLength);
  const router = useRouter();

  const mergedRiff = mergeWithEmptyRiff(riff, editModeRiffLength);
  const renderRiff: Riff = isEdit ? mergedRiff : truncateRiff(mergedRiff);
  const hasNotes = riff.strungs.some(strung => strung.notes.some(note => note.number !== undefined))

  const setStateFromQueryString = (callback = () => { }) => {
    const query = new URLSearchParams(window.location.search);
    const riffParam = query.get('r');
    if (riffParam) {
      const riffFromQuery = urlParamsToState(riffParam);
      setRiff(riffFromQuery);
      callback();
    }
  }

  const scrollAreaRef = useRef(null);
  const scrollTargetRef = useRef(null);

  useEffect(() => {
    let options = {
      root: scrollAreaRef.current,
      rootMargin: '0px',
      threshold: 1.0
    }
    const intersectionCallback: IntersectionObserverCallback = ([event]) => {
      if (isEdit && hasNotes && event.isIntersecting) {
        setEditModeRiffLength(editModeRiffLength + pageLength)
      }
    };
    let observer = new IntersectionObserver(intersectionCallback, options);
    observer.observe(scrollTargetRef.current as unknown as Element)
    return () => observer.unobserve(scrollTargetRef.current as unknown as Element)
  }, [isEdit, hasNotes, editModeRiffLength])

  // on initial pageload
  useEffect(() => {
    setStateFromQueryString(() => setIsEdit(false));
  }, [])

  // on back/forward navigation
  useEffect(() => {
    router.beforePopState(({ as }) => {
      if (as !== router.asPath) {
        setStateFromQueryString();
      }
      return true;
    });

    return () => {
      router.beforePopState(() => true);
    };
  }, [router]);

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

  return <div className={styles.container}>
    <Header />
    <div ref={scrollAreaRef} className={isEdit ? styles.edit : ''}>
      <div style={{ overflowX: 'scroll', overflowY: 'clip' }}>
        <div className={styles.riff}>
          {
            renderRiff?.strungs.map((strung, s) =>
              <div key={s} className={styles.string}>
                {
                  strung.notes.map((note, n) =>
                    <Note key={n} note={note} setNote={() => setNote(s, n)} />
                  )
                }
                <Show when={s === 0}>
                  <span data-id="load-more" ref={scrollTargetRef}></span>
                </Show>
              </div>
            )
          }
        </div>
      </div>
    </div>
    <EditPane {...{ isEdit, setIsEdit, pasteValue, setPasteValue }} />

  </div>

}

export default Riff;