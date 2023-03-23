import {useEffect, useState} from 'react';
function useSearch<T>(term?: string): [T | undefined, boolean, any] {
  const [data, setData] = useState<T | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    const performSearch = async (q: string) => {
      try {
        setLoading(true);

        const res = await fetch(
          `https://mobile-staging.gametime.co/v1/search?q=${q}`,
        );
        const json = await res.json();
        setData(json);
        // eslint-disable-next-line no-catch-shadow, @typescript-eslint/no-shadow
      } catch (error: any) {
        setError(error);
      }
      setLoading(false);
    };

    if (term) {
      performSearch(term);
    } else {
      setData(undefined);
    }
  }, [term]);

  return [data, loading, error];
}

export default useSearch;
