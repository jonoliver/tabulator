
import type { Riff } from '../../components/riff';

export const riffToUrlParam = (riff: Riff) => {
  return riff.strungs.map(strung => strung.notes.map(notes => notes.number).join('.')).join('-')
}

export const stateToUrlParams = (riff: Riff) => {
  return [
    `r=${riffToUrlParam(riff)}`,
    // isEdit && 'e=1',
  ].filter(Boolean).join('&')
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