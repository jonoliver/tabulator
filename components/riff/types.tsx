import { MouseEventHandler } from 'react';

export type Fret = {
  number?: number;
  isSelected?: boolean;
};
// lol thx for overloading the term `string`, CS

export type Strung = {
  notes: Fret[];
};

export type Riff = {
  strungs: Strung[];
};

export type Coords = {
  strungIndex: number;
  noteIndex: number;
};

export type SelectedCoords = Coords | null;

export type NoteProps = {
  note: Fret;
  onClick: MouseEventHandler;
};
