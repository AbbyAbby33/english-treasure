import React from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import styles from '../../styles/Material.module.scss';
import MaterialTitle from '../../components/materialTitle';

const MaterialPage: NextPage = () => {
    const router = useRouter();
    const { mid } = router.query;
    const title = {
        id: 'v0001',
        englishName: 'Petty Cash Jar',
        chineseName: '零用現金罐',
        important: false
    };

    const dataList = [
        {
            id: 'md00001',
            content: [
                { id: 'w00001', type: '1', english: 'trying', phoneticSymbol: '/ˈtraɪɪŋ/', chinese: [{ type: 'v', mean: '嘗試；審問；審理；磨練；折磨；測試' }, { type: 'adj', mean: '折磨；使苦惱' }] }, // 1.單字
            ]
        },
        {
            id: 'md00002',
            content: [
                { id: 'w00002', type: '1', english: 'perspective', phoneticSymbol: '/pɚˈspɛktɪv/', chinese: [{ type: 'n', mean: '透視；觀點；態度' }] }, // 1.單字
            ]
        },
        {
            id: 'md00003',
            content: [
                { id: 'w00003', type: '1', english: 'uncertainty', phoneticSymbol: '/ʌnˈsɝ.tən.ti/', chinese: [{ type: 'n', mean: '不確定性' }] }, // 1.單字
                { id: 'w00004', type: '3', english: 'Life is full of uncertainties.', chinese: '人生充滿了未知數' }, //3.句子
                { id: 'w00005', type: '3', english: 'Nothing is ever decided, and all the uncertainty is very bad for staff morale.', chinese: '甚麽都還沒有決定，而這一切不確定因素都對員工士氣非常不利。' }, //3.句子
            ]
        },
        {
            id: 'md00004',
            content: [
                { id: 'w00006', type: '2', english: 'well-balanced diet', chinese: '飲食均衡' }, //2.片語
            ]
        }
    ];

    return (
        <>
            <MaterialTitle data={title}></MaterialTitle>
            <div className={styles['material-content']}>
                {dataList.map((item) => (
                    <div key={item.id} className={styles['material-item']}>
                        {item.content.map((v) => {
                            return (
                                <div key={v.id}>
                                    {v.type === '1'
                                        ? (
                                            <div className={styles['material-word']}>
                                                <div className={styles['material-english']}>{v.english}</div>
                                                <div className={styles['description']}>
                                                    {/* 音標 */}
                                                    <div>{v.phoneticSymbol}</div>
                                                    {/* 中文 */}
                                                    {v.chinese.map((c) => {
                                                        return (
                                                            <div key={c.type}>
                                                                <span>{`(${c.type}.) `}</span>
                                                                <span className={styles['material-chinese']}>{c.mean}</span>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        )
                                        : (
                                            <div>
                                                <div className={styles['material-english']}>{v.english}</div>
                                                <div className={styles['material-chinese-sentence']}>{v.chinese}</div>
                                            </div>
                                        )
                                    }
                                </div>
                            )
                        })}
                    </div>
                ))}
            </div>
        </>
    )
}

export default MaterialPage;
