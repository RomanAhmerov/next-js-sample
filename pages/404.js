import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Heading from '../components/Heading';
import Head from 'next/head';

const Error = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000);
    }, []);

    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <Heading text='Error 404' />
            <Heading tag='h2' text='Your page is not found | error 404' />
        </>
    );
};

export default Error;
