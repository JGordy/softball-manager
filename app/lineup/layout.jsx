import styles from './styles.module.css';

export const metadata = {
    title: 'Lineup - Softball Roster Manager',
}

export default function LineupLayout({ children }) {
    return (
        <>
            <nav>Lineup Navbar</nav>
            <main className={styles.main}>
                {children}
            </main>
        </>
    )
}
