import getGenAiResponse from '@/lib/getGenAiResponse';
import GeneratedLineup from './components/GeneratedLineup';
import { Suspense } from 'react';

export default function Lineup() {
    const response = getGenAiResponse();
    // throw new Error('Not Today');
    return (
        <>
            <Suspense fallback={<p>Generating Lineup...</p>}>
                <GeneratedLineup promise={response} />
            </Suspense>
        </>
    )
}
