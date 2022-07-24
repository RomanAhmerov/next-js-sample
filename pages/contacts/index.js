import Head from 'next/head';
import Heading from '../../components/Heading';
import Link from 'next/link';
import { useState, useEffect } from 'react';

// Server Render Data
export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    if (!data) {
        return {
            notFound: true,
        };
    }

    return {
        props: { contacts: data },
    };
};

const Contacts = ({ contacts }) => {
    // Client Render Data
    // const [contacts, setContacts] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //         const data = await response.json();
    //         setContacts(data);
    //     };

    //     fetchData();
    // }, []);

    return (
        <>
            <Head>
                <title>Contacts</title>
            </Head>
            <Heading text='Contacts lists:' />

            <ul>
                {contacts.length &&
                    contacts.map(({ id, name, email }) => {
                        return (
                            <li key={id}>
                                <Link href={`/contacts/${id}`}>{name}</Link>
                            </li>
                        );
                    })}
            </ul>
        </>
    );
};

export default Contacts;
