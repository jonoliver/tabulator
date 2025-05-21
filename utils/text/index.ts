import type { Riff } from '../../components/riff/types';
import { truncateRiff } from '../url';

const DEFAULT_STRING_NAMES = ['e', 'B', 'G', 'D', 'A', 'E'];

export const riffToPlainText = (
  riff: Riff,
  stringNames: string[] = DEFAULT_STRING_NAMES
) => {
  const { strungs } = truncateRiff(riff);
  const maxNotes = Math.max(...strungs.map((s) => s.notes.length));

  const colWidths = Array.from({ length: maxNotes }, (_, noteIndex) =>
    Math.max(
      ...strungs.map((strung) => {
        const fret = strung.notes[noteIndex] || {};
        const len = fret.number !== undefined ? String(fret.number).length : 1;
        return noteIndex === maxNotes - 1 ? len : len + 1;
      })
    )
  );

  return strungs
    .map((strung, i) => {
      const name = stringNames[i] || `s${i}`;
      const notes = Array.from({ length: maxNotes }, (_, noteIndex) => {
        const note = strung.notes[noteIndex] || {};
        const width = colWidths[noteIndex];
        if (note.number !== undefined) {
          const value = String(note.number);
          return value + '-'.repeat(width - value.length);
        }
        return '-'.repeat(width);
      }).join('');
      return `${name}|${notes}|`;
    })
    .join('\n');
};
