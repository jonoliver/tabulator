import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { urlParamsToState, stateToUrlParams, truncateRiff } from '../utils/url';
import type { Riff } from '../components/riff/types';

export const INITIAL_RIFF_STATE: Riff = {
  strungs: Array(6)
    .fill({})
    .map((_, i) => ({
      notes: Array(12)
        .fill({})
        .map((_, n) => ({})),
    })),
};

type RiffQueryHookResponse = [Riff, (riff: Riff) => void];

export const useQueryState = (
  setIsEdit: (isEdit: boolean) => void
): RiffQueryHookResponse => {
  const router = useRouter();
  const [isPageLoad, setIsPageLoad] = useState(true);
  const [riff, setRiff] = useState(INITIAL_RIFF_STATE);

  const setStateFromQueryString = (riffParam: string) => {
    if (riffParam) {
      const riffFromQuery = urlParamsToState(riffParam);
      setRiff(riffFromQuery);
    }
  };

  const setRiffQueryState = (riff: Riff) => {
    router.push(`?${stateToUrlParams(truncateRiff(riff))}`, undefined, {
      shallow: true,
    });
    setRiff(riff);
  };

  useEffect(() => {
    if (isPageLoad) {
      setIsPageLoad(false);
      // TODO: use a less hacky strategy for this check
      if (router.asPath.match(/^\/\?r=.+/)) {
        setIsEdit(false);
      }
    }

    if (typeof router.query.r === 'string') {
      setStateFromQueryString(router.query.r);
    }
  }, [router.query]);

  return [riff, setRiffQueryState];
};
