import { useEffect, useState } from 'react';

export function useFetch(url) {
    const [data, setData ] = useState({});
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!url) return
        setLoading(true);

        async function fetchData() {
            try {
                const data = await url
                setData(data);
                setLoading(false);
                setError(false);
            }
            catch(err) {
                console.log(err);
                setError(true);
            }
            finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [url])

    return { isLoading, data, error };
}
