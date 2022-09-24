import React from 'react';
import styles from './materialTitle.module.scss';
import { IoIosBrush } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
// import { IoIosHeartHalf } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";

type MaterialTitleProps = {
    data: MaterialProps;
}

type MaterialProps = {
    englishName: string;
    chineseName: string;
    important: boolean;
}

export default function MaterialTitle({ data }: MaterialTitleProps) {
    return (
        <div className={styles["material-item"]}>
            <div>
                <h2>{data.englishName}</h2>
                <h3>{data.chineseName}</h3>
            </div>
            <div className={styles["icon-wrap"]}>
                <span>{data.important ? <IoIosHeart /> : <IoIosHeartEmpty />}</span>
                <span><IoIosBrush /></span>
            </div>
        </div>
    )
}
