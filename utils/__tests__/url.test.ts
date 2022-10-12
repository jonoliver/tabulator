
import {
  stateToUrlParams,
  urlParamsToState,
} from '../url';
import type { Riff } from '../../components/riff';

const riff: Riff = {
  strungs: [
    {
      notes: [
        {
          number: 0,
        },
      ]
    },
    {
      notes: [
        {
          number: 0,
        },
        {
          number: 1,
        },
        {
          number: 2,
        },
        {},
        {},
        {
          number: 25,
        },
      ]
    }
  ]
}

// const strungifiedRiff = '-abcz';
const strungifiedRiff = 'r=0-0.1.2...25';

describe('#stateToUrlParams', () => {
  it('converts a riff object to a string for a url param', () => {
    expect((stateToUrlParams(riff))).toBe(strungifiedRiff)
  })
})

describe('#stateToUrlParams', () => {
  it('converts a string from a url param to a riff', () => {
    expect((urlParamsToState('0-0.1.2...25'))).toMatchObject(
      expect.objectContaining({
        strungs: expect.objectContaining(riff.strungs)
      })
    )
  })
})