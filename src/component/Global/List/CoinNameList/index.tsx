import React from 'react';
import { CoinList } from 'lib/type';

interface Props {
    coinName: CoinList[];
}
const CoinNameList = ({ coinName }: Props) => {
    return (
        <section className="coinList">
            <ul className="coinList__title girdSum headTitle">
                <li>구분 (단위 : 백만원)</li>
            </ul>

            <ul className="coinList__fontBold">
                <li>합계</li>
            </ul>

            <ul>
                {coinName.map((item: CoinList, index: number) => {
                    return <li key={index}>{item.name}</li>;
                })}
            </ul>
        </section>
    );
};

export default CoinNameList;
