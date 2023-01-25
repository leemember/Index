import React from 'react';
import { CoinList } from 'lib/type';

type Props = {
    coinName: CoinList[];
};

// 코인명
const CoinNameList = ({ coinName }: Props) => {
    return (
        <section className="domestic__coinlist--name">
            <ul className="header">
                <li>구분</li>
            </ul>

            <ul className="domestic__coinlist--border">
                <li className="headerStyle">점유율</li>
                <li className="headerTop">합계</li>
            </ul>
            <ul className="domestic__coinlist--border">
                {coinName.map((item: CoinList, index: number) => {
                    return <li key={index}>{item.name}</li>;
                })}
            </ul>
        </section>
    );
};

export default CoinNameList;
