
import type { Riff } from '../../components/riff';

const lowerAZ = 'abcdefghijklmnopqrstuvwxyz';

export const riffToUrlParam = (riff: Riff) => {
  const str = riff.strungs.map(strung => {
    const { notes } = strung;

    const notePositions =
      notes
        .map((note, i) => note.number === undefined || [i, note.number])
        .filter(Array.isArray)

    return notePositions.reduce((
      output,
      [position, note],
      i,
      notes
    ) => {
      if (position > 0) {
        const delta = i > 0
          ? position - notes[i - 1][0] - 1
          : notes[i][0];
        if (delta > 0) {
          output += delta;
        }
      }
      output += lowerAZ[note];
      return output;
    }, '-')
  }).join('');
  return str;
}

export const stateToUrlParams = (riff: Riff) => {
  return [
    `r=${riffToUrlParam(riff)}`,
    // isEdit && 'e=1',
  ].filter(Boolean).join('&')
}

export const urlParamsToState = (riffParam: string) => {
  const strungReg = /-([a-z0-9]*)/g
  const matches = riffParam?.match(strungReg);
  const noteReg = /([a-z|]|[0-9|]+)/g;

  const strungs = (matches || []).map(encodedStrung => ({
    notes: ((encodedStrung || '').match(noteReg) || []).map(note => {
      const maybeNumber = parseInt(note, 10);
      if (isNaN(maybeNumber)) {
        return { number: lowerAZ.indexOf(note) }
      }
      return Array(maybeNumber).fill({});
    }).flat()
  }))
  return { strungs }
}