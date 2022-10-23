import React from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import styles from '../../styles/Material.module.scss';
import MaterialTitle from '../../components/materialTitle';
import { IoIosAddCircleOutline } from "react-icons/io";
import { HiLink } from "react-icons/hi";
import { HiVolumeUp } from "react-icons/hi";
import { IoIosBrush } from "react-icons/io";

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
            type: '1', // 1.單字
            english: 'trying',
            phoneticSymbol: '/ˈtraɪɪŋ/',
            chineseList: [{ type: 'v', mean: '嘗試；審問；審理；磨練；折磨；測試' }, { type: 'adj', mean: '折磨；使苦惱' }]
        },
        {
            id: 'md00002',
            type: '1',// 1.單字
            english: 'perspective',
            phoneticSymbol: '/pɚˈspɛktɪv/',
            chineseList: [{ type: 'n', mean: '透視；觀點；態度' }]
        },
        {
            id: 'md00003',
            type: '1',// 1.單字
            english: 'uncertainty',
            phoneticSymbol: '/ʌnˈsɝ.tən.ti/',
            chineseList: [{ type: 'n', mean: '不確定性' }]
        },
        {
            id: 'md00004',
            type: '3',//3.句子
            english: 'Life is full of uncertainties.',
            chinese: '人生充滿了未知數'
        },
        {
            id: 'md00005',
            type: '2',//2.片語
            english: 'well-balanced diet',
            chinese: '飲食均衡'
        },
    ];

    return (
        <>
            <MaterialTitle data={title}></MaterialTitle>
            <div className={styles['operate-bar']}>
                <div className={styles['operate-bar-left']}>
                    <HiLink />
                    <HiVolumeUp />
                    <IoIosBrush />
                </div>
                <div>
                    <IoIosAddCircleOutline />
                </div>
            </div>
            <div className={styles['material-content']}>
                {dataList.map((item) => (
                    <div key={item.id} className={styles['material-item']}>
                        {item.type === '1'
                            ? (
                                <div className={styles['material-word']}>
                                    <div className={styles['material-english']}>{item.english}</div>
                                    <div className={styles['description']}>
                                        {/* 音標 */}
                                        <div>{item.phoneticSymbol}</div>
                                        {/* 中文 */}
                                        {item.chineseList?.map((c) => {
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
                                    <div className={styles['material-english']}>{item.english}</div>
                                    <div className={styles['material-chinese-sentence']}>{item.chinese}</div>
                                </div>
                            )
                        }
                    </div>
                ))}
            </div>
        </>
    )
}

export default MaterialPage;
