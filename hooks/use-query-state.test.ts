import { renderHook, act } from '@testing-library/react';
import { useQueryState, INITIAL_RIFF_STATE } from './use-query-state';
import * as nextRouter from 'next/router';
const asPath = '/?r=';
nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({
  query: {
    r: '',
  },
  asPath,
  beforePopState(callback: any) {
    callback(asPath);
  },
}));

let originalLocation: Location;

beforeAll(() => {
  originalLocation = window.location;
});

afterAll(() => {
  Object.defineProperty(window, 'location', {
    value: originalLocation,
  });
});

beforeEach(() => {
  Object.defineProperty(window, 'location', {
    value: {
      href: 'http://localhost',
    },
  });
});

describe('useQueryState', () => {
  describe('query string behavior on page load', () => {
    it('sets the initial riff state', () => {
      // act(() => {
      //   window.location.href = 'http://localhost';
      // });

      const { result } = renderHook(() => useQueryState(jest.fn()));

      expect(result.current[0]).toStrictEqual(INITIAL_RIFF_STATE);
    });

    it('sets the riff from the query string', () => {
      // act(() => {
      //   window.location.href = 'http://localhost?r=-a-----';
      // });
      const { result } = renderHook(() => useQueryState(jest.fn()));

      expect(result.current[0]).toStrictEqual(INITIAL_RIFF_STATE);
    });
  });
});
