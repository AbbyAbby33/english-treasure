import React from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import styles from '../../styles/Material.module.scss';
import MaterialTitle from '../../components/materialTitle';

const MaterialPage: NextPage = () => {
    const router = useRouter();
    const { mid } = router.query;
    const item = {
        id: 'v0001',
        englishName: 'Petty Cash Jar',
        chineseName: '零用現金罐',
        important: false
    };

    return (
        <div>
            <MaterialTitle data={item}></MaterialTitle>
        </div>
    )
}

export default MaterialPage;
