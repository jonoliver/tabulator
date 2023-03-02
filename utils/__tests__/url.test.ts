
import { stateToUrlParams, urlParamsToState } from '../url';

const riff = {
  "strungs": [
    {
      "notes": [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {
          "number": 25
        },
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {
          "number": 25
        },
      ]
    },
    {
      "notes": [
      ]
    },
    {
      "notes": [
        {},
        {},
        {
          "number": 2
        },
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {
          "number": 2
        },
      ]
    },
    {
      "notes": [
        {},
        {
          "number": 2
        },
        {},
        {
          "number": 2
        },
        {},
        {},
        {
          "number": 3
        },
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {
          "number": 2
        },
        {},
        {
          "number": 2
        },
        {},
        {},
        {
          "number": 3
        },
      ]
    },
    {
      "notes": [
        {
          "number": 0
        },
        {},
        {},
        {},
        {},
        {
          "number": 3
        },
        {},
        {
          "number": 3
        },
        {},
        {},
        {},
        {
          "number": 0
        },
        {},
        {},
        {
          "number": 0
        },
        {},
        {
          "number": 0
        },
        {},
        {},
        {},
        {},
        {
          "number": 3
        },
      ]
    },
    {
      "notes": [
        {},
        {},
        {},
        {},
        {
          "number": 3
        },
        {},
        {},
        {},
        {
          "number": 0
        },
        {},
        {
          "number": 0
        },
        {},
        {},
        {
          "number": 0
        },
        {},
        {
          "number": 0
        },
        {},
        {},
        {},
        {},
        {
          "number": 3
        },
      ]
    }
  ]
}
const strungifiedRiff = '-14z12z--2c15c-1c1c2d10c1c2d-a4d1d3a2a1a4d-4d3a1a2a1a4d';

describe('#stateToUrlParams', () => {
  it('converts a riff object to a string for a url param', () => {
    expect((stateToUrlParams(riff))).toBe(`r=${strungifiedRiff}`)
  })
})

describe('#urlParamsToState', () => {
  it('converts a string from a url param to a riff', () => {
    const state = urlParamsToState(strungifiedRiff);
    expect((state)).toMatchObject(
      expect.objectContaining({
        strungs: expect.arrayContaining(riff.strungs)
      })
    )
  })
})