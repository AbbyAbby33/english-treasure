import React from 'react';
import Head from 'next/head';

type LayoutProps = {
    children: JSX.Element;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Head>
                <title>English Treasure</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <main>{children}</main>
        </>
    )
};
