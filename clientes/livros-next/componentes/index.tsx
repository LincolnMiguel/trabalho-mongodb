import Head from 'next/head';
import { Menu } from './Menu';

const Home: React.FC = () => {
    return (
        <div className="container">
            <Head>
                <title>Loja Next</title>
            </Head>
            <Menu />
            <main>
                <h1 style={styles.title}>Página Inicial</h1>
            </main>
        </div>
    );
};

const styles = {
    main: {
        padding: '20px',
        textAlign: 'center',
    },
    title: {
        fontSize: '2rem',
    },
};

export default Home;