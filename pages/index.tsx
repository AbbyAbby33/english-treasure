import type { NextPage } from 'next';
import styles from '../styles/Home.module.scss';
import { IoIosAddCircleOutline } from "react-icons/io";
import Link from 'next/link';
import MaterialTitle from '../components/materialTitle';

// Page：英文影片列表
const Home: NextPage = () => {

    const VIDEO_LIST = [
        { id: 'v0001', englishName: 'Petty Cash Jar', chineseName: '零用現金罐', important: false },
        { id: 'v0002', englishName: '8 Habits to Help You Live Your Best Life', chineseName: '8個習慣幫你活出最好的人生', important: true },
        { id: 'v0003', englishName: '2 critical misconceptions about happiness', chineseName: '什麼是幸福？關於幸福的二個重要誤解', important: false },
        { id: 'v0004', englishName: 'How does alcohol cause hangovers', chineseName: '酒精是如何造成宿醉的？', important: false }
    ];

    const toggleDialog = (flag: boolean) => {
        const dialog = document.getElementById('dialog') as HTMLDialogElement;
        if (flag) {
            if (dialog) dialog.showModal();
        } else {
            if (dialog) dialog.close();
        }
    }

    return (
        <div>
            <div className={styles.title}>
                <h1>英文影片列表</h1>
                <span onClick={() => toggleDialog(true)}><IoIosAddCircleOutline /></span>
            </div>
            {/* TODO: 客製化select */}
            <div className={styles.selectBar}>
                <select name="" id="">
                    <option value="">來源</option>
                    <option value="01">Youtube</option>
                    <option value="02">VoiceTube</option>
                    <option value="99">其他</option>
                </select>
                <select name="" id="">
                    <option value="">分類</option>
                    <option value="01">餐飲</option>
                    <option value="02">心靈</option>
                    <option value="99">其他</option>
                </select>
            </div>
            <div>
                {VIDEO_LIST.map((item) => {
                    return (
                        <Link href={`/material?mid=${item.id}`} key={item.id}>
                            <div>
                                <MaterialTitle data={item}></MaterialTitle>
                            </div>
                        </Link>
                    )
                })}
            </div>
            <dialog id="dialog" className={styles["dialog"]}>
                <h1 className={styles["dialog-title"]}>新增英文影片</h1>
                <div className={styles["dialog-body"]}>
                    <form action="">
                        <label htmlFor="">英文名稱<code className={styles.require}>*</code></label>
                        <textarea name="" id="" rows={3}></textarea>
                        <label htmlFor="">中文名稱<code className={styles.require}>*</code></label>
                        <textarea name="" id="" rows={3}></textarea>
                        <label htmlFor="">網址<code className={styles.require}>*</code></label>
                        <textarea name="" id="" rows={3}></textarea>
                        <label htmlFor="">來源<code className={styles.require}>*</code></label>
                        <select name="" id="">
                            <option value="01">Youtube</option>
                            <option value="02">VoiceTube</option>
                            <option value="99">其他</option>
                        </select>
                        <label htmlFor="">分類<code className={styles.require}>*</code></label>
                        <select name="" id="">
                            <option value="01">餐飲</option>
                            <option value="02">心靈</option>
                            <option value="99">其他</option>
                        </select>
                    </form>
                </div>
                <div className={styles["dialog-button"]}>
                    <button type="button" className={styles["cancel-button"]} onClick={() => toggleDialog(false)}>取消</button>
                    <button type="button" className={styles["confirm-button"]}>確定</button>
                </div>
                {/* <form method="dialog"></form> */}
            </dialog>
        </div>
    )
};

export default Home;
