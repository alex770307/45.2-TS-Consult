import { useEffect, useState } from 'react';
import styles from './dataFetcher.module.css'

interface DataItem {
    id: number;
    name: string;
    description: string;
}

interface ApiResponseItem {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export default function DataFetcher(): JSX.Element {
    const [data, setData] = useState<DataItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const apiData: ApiResponseItem[] = await response.json();
                const transformedData: DataItem[] = apiData.map(item => ({
                    id: item.id,
                    name: item.title,
                    description: item.body,
                }));
                setData(transformedData);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Unknown error');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div className={styles.loading}>Загрузка...</div>;
    }

    if (error) {
        return <div className={styles.error}>Ошибка: {error}</div>;
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Список постов</h1>
            <ul className={styles.list}>
                {data.map(item => (
                    <li key={item.id} className={styles.listItem}>
                        <h2 className={styles.itemTitle}>{item.name}</h2>
                        <p className={styles.itemDescription}>{item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}