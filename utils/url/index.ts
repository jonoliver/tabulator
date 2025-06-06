
import type { Riff, Fret } from '../../components/riff/types';

const lowerAZ = 'abcdefghijklmnopqrstuvwxyz';

export const riffToUrlParam = (riff: Riff) => {
  const str = riff.strungs
    .map(strung => {
      const { notes } = strung;

      const notePositions = notes
        .map((note, i) => note.number === undefined || [i, note.number])
        .filter(Array.isArray);

      return notePositions.reduce((output, [position, note], i, notes) => {
        if (position > 0) {
          const delta = i > 0 ? position - notes[i - 1][0] - 1 : notes[i][0];
          if (delta > 0) {
            output += delta;
          }
        }
        output += lowerAZ[note];
        return output;
      }, '-');
    })
    .join('');
  return str;
};

export const stateToUrlParams = (riff: Riff) => {
  return [
    `r=${riffToUrlParam(riff)}`,
    // isEdit && 'e=1',
  ]
    .filter(Boolean)
    .join('&');
};

export const urlParamsToState = (riffParam: string) => {
  const strungReg = /-([a-z0-9]*)/g;
  const matches = riffParam?.match(strungReg);
  const noteReg = /([a-z|]|[0-9|]+)/g;

  const strungs = (matches || []).map(encodedStrung => ({
    notes: ((encodedStrung || '').match(noteReg) || [])
      .map(note => {
        const maybeNumber = parseInt(note, 10);
        if (isNaN(maybeNumber)) {
          return { number: lowerAZ.indexOf(note) };
        }
        return Array(maybeNumber).fill({});
      })
      .flat(),
  }));
  return { strungs };
};

// thx typescript https://github.com/microsoft/TypeScript/pull/49636
export const findLastIndex = (arr: any[], condition: any) => {
  const reverseIndex = [...arr].reverse().findIndex(condition);
  return reverseIndex > -1 ? arr.length - reverseIndex : -1;
};

export const truncateRiff = (riff: Riff): Riff => {
  const maxNoteLength = Math.max(
    ...riff.strungs.map(strung =>
      findLastIndex(strung.notes, (note: Fret) => note.number !== undefined)
    )
  );

  const strungs = riff.strungs.map(strung => ({
    notes: strung.notes.slice(0, maxNoteLength),
  }));
  return { strungs };
};
