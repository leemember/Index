import React from 'react';
import { CoinList, Rank } from 'lib/type';
import _ from 'lodash';

interface Props {
    rankName: Rank;
    listName: CoinList[];
}
const DealList = ({ rankName, listName }: Props) => {
    const bithumbUpbit = rankName.exchangeMetaId === 'bithumb' || rankName.exchangeMetaId === 'Upbit';
    /**
     * 각 key 타입 별 합계
     * @param arrName
     * @param type
     */
    const coinSum = (arrName: any, type: string) => {
        const arrNum = _.map(arrName, type);
        return <>{_.sum(arrNum).toLocaleString()}</>;
    };

    return (
        <section className={`domestic__coinlist--info ${rankName.exchangeMetaId}`}>
            {/* 가상자산 거래소명 */}
            <ul className="header">
                <li>{rankName.exchangeMetaName}</li>
            </ul>

            {bithumbUpbit ? (
                <ul className="domestic__coinlist--infoSum">
                    <li className="headerStyle none">KRW</li>
                    <li className="headerStyle">BTC 등</li>
                    <li className="headerStyle">합계</li>
                    <li className="headerStyle">점유율</li>
                </ul>
            ) : (
                <ul className="domestic__coinlist--infoTwoSum">
                    <li className="headerStyle">합계</li>
                    <li className="headerStyle">점유율</li>
                </ul>
            )}

            {/* 합계 */}
            {bithumbUpbit ? (
                <ul className="domestic__coinlist--infoDesc">
                    <li>{coinSum(listName, 'volumeKrw')}</li>
                    <li>{coinSum(listName, 'volumeEtc')}</li>
                    <li className="red">{coinSum(listName, 'volume')}</li>
                    <li className="red">{rankName.domesticShareRate.toFixed(2)}%</li>
                </ul>
            ) : (
                <ul className="domestic__coinlist--infoTwoDesc">
                    <li className="red">{coinSum(listName, 'volume')}</li>
                    <li className="red">{rankName.domesticShareRate.toFixed(2)}%</li>
                </ul>
            )}

            {/* 합계 */}
            {bithumbUpbit ? (
                <>
                    {listName.map((item: CoinList, index: number) => {
                        return (
                            <ul className="domestic__coinlist--infoList" key={index}>
                                <li>{item.volumeKrw.toLocaleString()}</li>
                                <li>{item.volumeEtc.toLocaleString()}</li>
                                <li>{item.volume.toLocaleString()}</li>
                                <li>{item.domesticCoinShareRate.toFixed(1)}%</li>
                            </ul>
                        );
                    })}
                </>
            ) : (
                <>
                    {listName.map((item: CoinList, index: number) => {
                        return (
                            <ul className="domestic__coinlist--infoTwoList" key={index}>
                                <li>{item.volume.toLocaleString()}</li>
                                <li>{item.domesticCoinShareRate.toFixed(1)}%</li>
                            </ul>
                        );
                    })}
                </>
            )}
        </section>
    );
};

export default DealList;
