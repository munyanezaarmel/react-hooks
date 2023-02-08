import { useState, useEffect } from 'react';

export default function useDataLoading(url) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [error, setError] = useState({});

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (e) {
        setError(e);
      }
    }
    fetchData();
  }, [url]);

  return { loading, data, error };
}