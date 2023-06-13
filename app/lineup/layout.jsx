import Link from 'next/link';
import styles from './styles.module.css';

export const metadata = {
    title: 'Lineup - Softball Roster Manager',
}

export default function LineupLayout({ children }) {
    return (
        <>
            <nav>
                <Link href='/'>Link to Home Page</Link>
            </nav>
            <main className={styles.main}>
                {children}
            </main>
        </>
    )
}
