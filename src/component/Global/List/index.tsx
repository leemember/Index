import React from 'react';
import { CoinList, Rank } from 'lib/type';
import CoinNameList from './CoinNameList';
import ExchangeList from './ExchangeList';
import './styles.scss';

interface Props {
    coinList: [CoinList][];
    rankingList: Rank[];
}
const List = ({ coinList, rankingList }: Props) => {
    // 거래소 코인 리스트
    const arrDealList = () => {
        const list = [];
        for (let i = 0; i < coinList.length; i++) {
            list.push(<ExchangeList key={i} globalCoinList={coinList[i]} globalRank={rankingList[i]} />);
        }
        return list;
    };

    return (
        <div className="coinListBox">
            <CoinNameList coinName={coinList[0]} />
            {arrDealList()}
        </div>
    );
};

export default List;
