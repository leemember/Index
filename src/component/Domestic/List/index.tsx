import React from 'react';
import { CoinList, Rank } from 'lib/type';
import Division from './CoinNameList';
import DealList from './DealList';
import _ from 'lodash';
import './styles.scss';

interface Props {
    coinList: [CoinList][];
    domeRankList: Rank[];
    domesticCoinList: [CoinList][];
}
const List = ({ coinList, domeRankList, domesticCoinList }: Props) => {
    // volume만 뽑아놓은 배열
    const arrVolume = domesticCoinList.map((value: [CoinList]) => value.map((item: CoinList) => item.volume));
    // 국내8사 거래금액 리스트 합계
    const domeTotalVolume = _.zipWith(...arrVolume, (...arr) => _.sum(arr));
    // 국내 8사 거래금액 코인 리스트 합계의 합계
    const totalDealSum = _.sum(_.flattenDeep(arrVolume));

    /**
     * 점유율 (각 코인별로 국내 8사 거래금액/totalDealSum)*100
     * @param totalArr
     * @param totalSum
     */
    const percent = (totalArr: any, totalSum: number) => {
        const result = ((totalArr / totalSum) * 100).toFixed(1);
        return <>{result}%</>;
    };

    // 거래소 코인 리스트
    const arrDealList = () => {
        const list = [];
        for (let i = 0; i < domeRankList.length; i++) {
            list.push(<DealList rankName={domeRankList[i]} listName={coinList[i]} key={i} />);
        }
        return list;
    };

    return (
        <div className="domestic__coinlist">
            <Division coinName={coinList[0]} />

            {arrDealList()}

            {/* 국내 8사 거래 금액*/}
            <section className="domesticEight">
                <ul className="header">
                    <li>국내8사</li>
                    <li>거래 금액</li>
                </ul>

                {/* 합계 */}
                <ul className="domesticEight__oneLayout">
                    <li className="boldText">{totalDealSum.toLocaleString()}</li>
                </ul>

                {domeTotalVolume.map((item, index: number) => {
                    return (
                        <ul className="domesticEight__oneLayout" key={index}>
                            <li>{item.toLocaleString()}</li>
                        </ul>
                    );
                })}
            </section>

            {/* 국내 8사 코인별 점유율*/}
            <section className="domesticEight none">
                <ul className="header">
                    <li>국내8사</li>
                    <li>코인별 점유율</li>
                </ul>

                {/* 합계 */}
                <ul className="domesticEight__oneLayout">
                    <li className="boldText">100%</li>
                </ul>

                {domeTotalVolume.map((item, index: number) => {
                    return (
                        <ul className="domesticEight__oneLayout" key={index}>
                            <li>{percent(item, totalDealSum)}</li>
                        </ul>
                    );
                })}
            </section>
        </div>
    );
};

export default List;
