import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { getGlobalCoinListApi, getGlobalDomeRankListApi, getGlobalRankListApi, getGlobalTotalApi } from 'recoil/selector';
import { todayCall } from 'lib/day';
import { CoinList, METHOD, Rank, TotalTypes } from 'lib/type';
import fetcher from 'lib/api';
import { daySearch } from 'recoil/atom';
import Header from 'component/Global/Header';
import GlobalSummary from 'component/Global/GlobalSummary';
import DomesticSummary from 'component/Global/DomesticSummary';
import List from 'component/Global/List';
import Search from 'component/Common/Search';
import './styles.scss';

const Global = () => {
    // api 상태관리
    const domesticRankings: Rank[] = useRecoilValue(getGlobalDomeRankListApi(todayCall));
    const globalRankingList: Rank[] = useRecoilValue(getGlobalRankListApi(todayCall));
    const globalTotal: TotalTypes = useRecoilValue(getGlobalTotalApi(todayCall));
    const globalCoinList: [CoinList][] = useRecoilValue(getGlobalCoinListApi(todayCall));
    const clickDay = useRecoilValue(daySearch);
    // 랭킹 리스트
    const [domeRanking, setDomeRanking] = useState<Rank[]>(domesticRankings);
    const [globalRanking, setGlobalRanking] = useState<Rank[]>(globalRankingList);
    const [total, setTotal] = useState<TotalTypes>(globalTotal);
    const [coinList, setCoinList] = useState<[CoinList][]>(globalCoinList);
    const changeDay = clickDay.replaceAll('-', '');

    const globalState = async (dayParams: {}) => {
        const domesticRank = await fetcher(METHOD.GET, `/global/domesticRank?toDate=${dayParams}`);
        const globalRank = await fetcher(METHOD.GET, `/global/globalRank?toDate=${dayParams}`);
        const globalTotal = await fetcher(METHOD.GET, `/global/total?toDate=${dayParams}`);
        const coinList = await fetcher(METHOD.GET, `/global/coinList?toDate=${dayParams}`);

        setDomeRanking(domesticRank.data);
        setGlobalRanking(globalRank.data);
        setTotal(globalTotal.data);
        setCoinList(coinList.data);
    };

    useEffect(() => {
        let polling = setInterval(() => {
            globalState(todayCall);
        }, 60000);

        if (clickDay.replaceAll('-', '') !== todayCall) {
            clearInterval(polling);
            globalState(changeDay);
        } else {
            globalState(changeDay);
        }

        // 페이지에 벗어날 경우 polling X
        return () => {
            clearInterval(polling);
        };
    }, [clickDay]);

    return (
        <main className="board2">
            {/* 헤더 */}
            <Header globalTotal={total} />
            <section className="board2__background">
                <div className="board2__searchBar">
                    {/* 검색바 */}
                    <Search />
                </div>

                {/* 글로벌, 국내 순위 */}
                <div className="board2__summary">
                    <h4 className="board2__summary--global">글로벌순위</h4>
                    <GlobalSummary globalRanking={globalRanking} />
                    <h4 className="board2__summary--domestic">국내순위</h4>
                    <DomesticSummary domeRanking={domeRanking} />

                    <p className="board2__text">※ 코인힐스 데이터 미제공의 경우 (기타알트) 합계에 포함됨.</p>
                </div>

                {/* 글로벌 거래액 & 점유율 */}
                <section className="board2__domestic--detailBox">
                    <List coinList={coinList} rankingList={globalRanking} />
                </section>

                {/* Footer 영역 날짜별로 비율 나타내기 */}
                {/*<ResultRank />*/}
            </section>
        </main>
    );
};

export default Global;
