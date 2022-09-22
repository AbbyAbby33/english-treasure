import type { NextPage } from 'next';
import styles from '../styles/Home.module.scss';
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosBrush } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
// import { IoIosHeartHalf } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";

// Page：英文影片列表
const Home: NextPage = () => {

    const VIDEO_LIST = [
        { id: 'v0000', englishName: '8 Habits to Help You Live Your Best Life', chineseName: '8個習慣幫你活出最好的人生', important: true },
        { id: 'v0001', englishName: '2 critical misconceptions about happiness', chineseName: '什麼是幸福？關於幸福的二個重要誤解', important: false },
        { id: 'v0002', englishName: 'How does alcohol cause hangovers', chineseName: '酒精是如何造成宿醉的？', important: false }
    ];

    return (
        <div>
            <div className={styles.title}>
                <h1>英文影片列表</h1>
                <span><IoIosAddCircleOutline /></span>
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
                        <div className={styles["video-item"]} key={item.id}>
                            <div>
                                <h2>{item.englishName}</h2>
                                <h3>{item.chineseName}</h3>
                            </div>
                            <div className={styles["icon-wrap"]}>
                                <span>{item.important ? <IoIosHeart /> : <IoIosHeartEmpty />}</span>
                                <span><IoIosBrush /></span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default Home;
