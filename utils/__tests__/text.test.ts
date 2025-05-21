import { riffToPlainText } from '../text';

const riff = {
  strungs: [
    { notes: [{ number: 0 }, { number: 1 }, {}] },
    { notes: [{}, { number: 2 }, {}] },
  ],
};

describe('riffToPlainText', () => {
  it('converts riff to ascii tab text', () => {
    expect(riffToPlainText(riff, ['e', 'B'])).toBe('e|0-1|\nB|--2|');
  });

  it('outputs lines of equal length', () => {
    const complex = {
      strungs: [
        { notes: [{ number: 0 }, {}, {}, {}, {}, { number: 0 }] },
        { notes: [{}, {}, { number: 0 }, {}, { number: 0 }, { number: 1 }] },
        { notes: [{}, { number: 0 }, {}, {}, {}, { number: 4 }] },
        { notes: Array(6).fill({}) },
        { notes: Array(6).fill({}) },
        { notes: [{ number: 0 }, {}, {}, {}, {}, { number: 0 }] },
      ],
    };
    const text = riffToPlainText(complex);
    const lines = text.split('\n');
    const lengths = lines.map((l) => l.length);
    expect(new Set(lengths).size).toBe(1);
  });
});
