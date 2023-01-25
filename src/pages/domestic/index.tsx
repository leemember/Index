import React, { useEffect, useState } from 'react';
import { getDomeCoinListApi, getDomeRankListApi, getDomeTotalApi } from 'recoil/selector';
import Header from 'component/Domestic/Header';
import Search from 'component/Common/Search';
import Summary from 'component/Domestic/Summary';
import GlobalRank from 'component/Domestic/ResultRank';
import List from 'component/Domestic/List';
import { useRecoilValue } from 'recoil';
import { daySearch, errorState } from 'recoil/atom';
import { todayCall } from 'lib/day';
import { CoinList, METHOD, Rank, TotalTypes } from 'lib/type';
import fetcher from 'lib/api';
import './styles.scss';

const Domestic = () => {
    const domeRankList = useRecoilValue(getDomeRankListApi(todayCall));
    const domesticCoinList = useRecoilValue(getDomeCoinListApi(todayCall));
    const domeTotal: TotalTypes = useRecoilValue(getDomeTotalApi(todayCall));
    const clickDay = useRecoilValue(daySearch);
    // 랭킹
    const [rankLink, setRankList] = useState<Rank[]>(domeRankList);
    // 전세계 금액
    const [globalKrw, setGlobalKrw] = useState<TotalTypes>(domeTotal);
    // 거래소별 코인리스트
    const [coinList, setCoinList] = useState<[CoinList][]>(domesticCoinList);
    const changeDay = clickDay.replaceAll('-', '');

    const domesticState = async (dayParams: {}) => {
        const rankApi = await fetcher(METHOD.GET, `/domestic/rank?toDate=${dayParams}`);
        const globalKrwApi = await fetcher(METHOD.GET, `/domestic/total?toDate=${dayParams}`);
        const coinListApi = await fetcher(METHOD.GET, `/domestic/coinList?toDate=${dayParams}`);

        setRankList(rankApi.data);
        setGlobalKrw(globalKrwApi.data);
        setCoinList(coinListApi.data);
    };

    useEffect(() => {
        let polling = setInterval(() => {
            domesticState(todayCall);
        }, 60000);

        if (clickDay.replaceAll('-', '') !== todayCall) {
            clearInterval(polling);
            domesticState(changeDay);
        } else {
            domesticState(changeDay);
        }

        // 페이지에 벗어날 경우 polling X
        return () => {
            clearInterval(polling);
        };
    }, [clickDay]);

    return (
        <main className="board1">
            <Header />

            <div className="board1__mainBorder">
                <div className="board1__search">
                    <Search />
                </div>

                <Summary rankList={rankLink} />
                <strong className="desc">※ 코인힐스 데이터 미제공의 경우 (기타알트) 합계에 포함됨.</strong>
                <List coinList={coinList} domesticCoinList={domesticCoinList} domeRankList={domeRankList} />
                <GlobalRank globalKrw={globalKrw} rank={rankLink} />
            </div>
        </main>
    );
};

export default Domestic;
