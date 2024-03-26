import { useCallback, useEffect, useRef } from "react";
import { CACHE_POLICY } from "../../data/cachePolicyEnum";
import { useMergeState } from "../useMergeState";
import api from "../../utils/api";

interface QueryOption {
  lazy?: boolean;
  cachePolicy?: CACHE_POLICY;
}

export const useQuery = (
  url: string,
  queryParams: Object,
  options: QueryOption = {}
) => {
  const { lazy = false, cachePolicy = CACHE_POLICY.CACHE_FIRST } = options;

  const wasCalled = useRef(false);
  const isSleeping = lazy && !wasCalled.current;

  const isCacheAvailable = Boolean(cache[url]);
  const canUseCache = isCacheAvailable && cachePolicy !== CACHE_POLICY.NO_CACHE;

  const [state, mergeState] = useMergeState({
    data: canUseCache ? cache[url] : null,
    isLoading: false,
    error: null,
    queryParams: {},
  });

  const makeRequest = useCallback(
    async (newParams?: any) => {
      const params = { ...state.queryParams, ...newParams };
      const apiParams = { ...queryParams, ...params };

      mergeState({ isLoading: true, queryParams: apiParams });
      try {
        const data = await api.get(url, apiParams);
        mergeState({ isLoading: false, error: null, data });
      } catch (error) {
        mergeState({ isLoading: false, error, data: null });
      }

      wasCalled.current = true;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [queryParams]
  );

  useEffect(() => {
    if (isSleeping) return;
    if (canUseCache && cachePolicy === CACHE_POLICY.CACHE_ONLY) return;

    makeRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setLocalData = useCallback(
    (getUpdatedData: Function) =>
      mergeState(({ data }: any) => {
        const newData = getUpdatedData(data);
        cache[url] = { ...(cache[url] || {}), data: newData };
        return { data: newData };
      }),
    [mergeState, url]
  );

  return [{ ...state, setLocalData }, makeRequest];
};

const cache: { [key: string]: any } = {};
