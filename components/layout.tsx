import React from 'react';
import Head from 'next/head';
import styles from './layout.module.scss';

type LayoutProps = {
    children: JSX.Element;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Head>
                <title>English Treasure</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                {/* Google fonts */}
                <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet" />
            </Head>
            <header className={styles.header}>English Treasure</header>
            <main className={styles.main}>{children}</main>
        </>
    )
};
