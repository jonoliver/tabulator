import { MouseEventHandler, useState, useEffect, useRef } from "react";
import produce from "immer";
import { useRouter } from 'next/router'
import { stateToUrlParams, urlParamsToState } from '../../utils/url';
import styles from './riff.module.scss';
import Header from '../header';
import { Show } from "../show";
import { EditPane } from "../controls";

export type Fret = {
  number?: number,
  isSelected?: boolean,
};

// lol thx for overloading the term `string`, CS
export type Strung = {
  notes: Fret[]
};

export type Riff = {
  strungs: Strung[]
};

type Coords = {
  strungIndex: number;
  noteIndex: number;
};

type SelectedCoords = Coords | null;

const mockState: Riff = {
  strungs: Array(6).fill({}).map((_, i) => ({
    notes: Array(12).fill({}).map((_, n) => ({
    }))
  }))
}

const setSelectedNote = (riff: Riff, coords: Coords) => produce(riff, (draft) => {
  draft.strungs[coords.strungIndex].notes[coords.noteIndex].isSelected = true;
  return draft;
});


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
  onClick: MouseEventHandler
}

const Note = ({ note, onClick }: NoteProps) => {
  const hasNote = note.number !== undefined;
  const noteClassNames = buildClasses([
    styles.number,
    !hasNote && styles.empty,
    note.isSelected && styles.selected
  ]);
  return (
    <div className={styles.fret} onClick={onClick}>
      <span data-cy="note" className={noteClassNames}>
        {note.number}
      </span>
    </div>
  );
}

const Riff = () => {
  const [riff, setRiff] = useState(mockState);
  const [isEdit, setIsEdit] = useState(true);
  const [pasteValue, setPasteValue] = useState(0);
  const [selectedCoords, setSelectedCoords] = useState<SelectedCoords>(null);

  const pageLength = 40;
  const [editModeRiffLength, setEditModeRiffLength] = useState(pageLength);
  const router = useRouter();

  const mergedRiff = mergeWithEmptyRiff(riff, editModeRiffLength);
  const renderRiff: Riff = isEdit
    ? selectedCoords && setSelectedNote(mergedRiff, selectedCoords) || mergedRiff
    : truncateRiff(mergedRiff);

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
    if (!isEdit) return;

    const wasSelected = selectedCoords?.strungIndex === strungIndex && selectedCoords.noteIndex === noteIndex;
    const fretValue = Number( mergedRiff.strungs[strungIndex]?.notes[noteIndex]?.number);
    const fretHasValue = !isNaN(fretValue);

    setSelectedCoords(wasSelected ? null : { strungIndex, noteIndex });

    if (fretHasValue) {
      setPasteValue(fretValue)
    }

    const newNote = wasSelected
      ? undefined
      : fretHasValue
        ? fretValue
        : pasteValue; // yeah I nested the terniary, big whoop

    const newRiff = produce<Riff>(mergedRiff, draft => {
      const note = draft.strungs[strungIndex]?.notes[noteIndex];
      note.number = newNote;
    });
    const truncatedRiff = truncateRiff(newRiff);
    router.push(`?${stateToUrlParams(truncatedRiff)}`, undefined, {
      shallow: true,
    });
    setRiff(newRiff);
  }

  const onNoteValueChange = (fret: number) => {
    const MIN = 0;
    const MAX = 25;
    fret = Math.min(MAX, isNaN(Number(fret)) ? MIN : fret);
    setPasteValue(fret);
    if (selectedCoords) {
      const newRiff = produce<Riff>(mergedRiff, draft => {
        draft.strungs[selectedCoords.strungIndex].notes[selectedCoords.noteIndex] = { number: fret };
      });
      const truncatedRiff = truncateRiff(newRiff);
      router.push(`?${stateToUrlParams(truncatedRiff)}`, undefined, {
        shallow: true,
      });
      setRiff(newRiff);
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      <div ref={scrollAreaRef} className={isEdit ? styles.edit : ''}>
        <div style={{ overflowX: 'scroll', overflowY: 'clip' }}>
          <div className={styles.riff}>
            {renderRiff?.strungs.map((strung, s) => (
              <div key={s} className={styles.string}>
                {strung.notes.map((note, n) => (
                  <Note key={n} note={note} onClick={() => setNote(s, n)} />
                ))}
                <Show when={s === 0}>
                  <span data-id="load-more" ref={scrollTargetRef}></span>
                </Show>
              </div>
            ))}
          </div>
        </div>
      </div>
      <EditPane {...{ isEdit, setIsEdit, pasteValue, onNoteValueChange }} />
    </div>
  );

}

export default Riff;