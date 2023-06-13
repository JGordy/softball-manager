'use client'

import { useEffect } from 'react';

export default function LineupErrors({
    error,
    reset,
}) {

    useEffect(() => {
        console.error({ error });
    });

    return (
        <div>
            <h2>Something went wrong!</h2>
            <button onClick={reset}>Try Again</button>
        </div>
    )
}
