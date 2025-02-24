import { useState, useEffect } from 'react';

export const useFetch = (universeIds = []) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const queryString = universeIds.join(',');

    useEffect(() => {
        if (!queryString) {
            setLoading(false);
            return;
        }
        setLoading(true);
        fetch(`https://games.roblox.com/v1/games?universeIds=${queryString}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((jsonData) => {
                setData(jsonData.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, [queryString]);

    return { data, loading, error };
};