import React from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const MaterialPage: NextPage = () => {
    const router = useRouter();
    const { mid } = router.query;

    return (
        <div>MaterialPage: {mid}</div>
    )
}

export default MaterialPage;
