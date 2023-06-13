import Link from 'next/link';
import getGenAiResponse from '@/lib/getGenAiResponse';
import GeneratedLineup from './components/GeneratedLineup';
import { Suspense } from 'react';


export default function Lineup() {
    const response = getGenAiResponse();
    // throw new Error('Not Today');
    return (
        <>
            <h1>Lineup</h1>
            <Link href='/'>Link to Home Page</Link>

            <Suspense fallback={<p>Generating Lineup...</p>}>
                <GeneratedLineup promise={response} />
            </Suspense>
        </>
    )
}
