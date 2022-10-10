
import type { Riff } from '../../components/riff';

export const stateToUrlParams = (riff: Riff) => {
  return riff.strungs.map(strung => strung.notes.map(notes => notes.number).join('.')).join('-')
}

export const urlParamsToState = (param: string) => {
  const strungs = param.split('-')
    .map(x => ({
      notes: x.split('.')
        .map(number => (number ? {
          number: parseInt(number, 10)
        } : {}))
    }))
  return { strungs };
}