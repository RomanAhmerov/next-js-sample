import Head from 'next/head';
import Heading from '../components/Heading';
import styles from '../styles/Home.module.scss';

// Server Render Data
export const getStaticProps = async () => {
    const response = await fetch(`${process.env.API_HOST}/api/socials`);
    const data = await response.json();

    if (!data) {
        return {
            notFound: true,
        };
    }

    return {
        props: { socials: data },
    };
};

const Home = ({ socials }) => {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <div className={styles.wrapper}>
                <Heading text='Home page' />

                <ul>{socials && socials.map(({ id, path }) => <li key={id}>{path}</li>)}</ul>
            </div>
        </>
    );
};

export default Home;
