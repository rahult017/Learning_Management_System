import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchDataComponent = ({ url, render }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        const source = axios.CancelToken.source();

        const fetchData = async () => {
            try {
                const response = await axios.get(url, { cancelToken: source.token });
                console.log(response.data)
                setData(response.data);
                setLoading(false);
            } catch (error) {
                if (axios.isCancel(error)) {
                    console.log('Request canceled:', error.message);
                } else {
                    console.error('Error fetching data:', error);
                    setError('Error fetching data. Please try again later.');
                    setLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            source.cancel('Component unmounted');
        };
    }, [url]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }  

    return render(data);
};

export default FetchDataComponent;
