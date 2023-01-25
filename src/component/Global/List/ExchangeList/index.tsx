import React from 'react';
import { CoinList, Rank } from 'lib/type';
import _ from 'lodash';

interface Props {
    globalRank: Rank;
    globalCoinList: CoinList[];
}
const ExchangeList = ({ globalRank, globalCoinList }: Props) => {
    /**
     * 각 key 타입 별로 합계
     * @param arrName
     */
    const coinSum = (arrName: any) => {
        const arrNum = _.map(arrName, 'volume');
        return <>{_.sum(arrNum).toLocaleString()}</>;
    };

    return (
        <section className="coinList">
            {/* 제목 */}
            <ul className="coinList__title headTitle">
                <li>{globalRank.exchangeMetaName}</li>
            </ul>

            <ul className="coinList__title rowSum headTitle">
                <li>거래액</li>
                <li>글로벌 점유율</li>
            </ul>

            <ul className="coinList__title rowSum fontBold__right">
                <li>{coinSum(globalCoinList)}</li>
                <li>{globalRank.globalShareRate.toFixed(2)}%</li>
            </ul>
            {/* 코인 종목별로 거래액, 글로범 점유율*/}
            {globalCoinList.map((item: CoinList, index: number) => {
                return (
                    <ul className="coinList__rate" key={index}>
                        <li>{item.volume.toLocaleString()}</li>
                        <li>{item.globalCoinShareRate.toFixed(2)}%</li>
                    </ul>
                );
            })}
        </section>
    );
};

export default ExchangeList;
