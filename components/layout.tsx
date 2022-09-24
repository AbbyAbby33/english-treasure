import React from 'react';
import Head from 'next/head';
import styles from './layout.module.scss';
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from 'next/router';
import Link from 'next/link';

type LayoutProps = {
    children: JSX.Element;
}

export default function Layout({ children }: LayoutProps) {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>English Treasure</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                {/* Google fonts */}
                <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet" />
            </Head>
            <header className={styles.header}>
                {router.pathname === '/material'
                    ?
                    (<Link href={'/'}>
                        <span className={styles.back}><IoIosArrowBack /></span>
                    </Link>)
                    : ''
                }
                English Treasure
            </header>
            <main className={styles.main}>{children}</main>
        </>
    )
};
