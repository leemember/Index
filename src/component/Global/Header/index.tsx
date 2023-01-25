import React from 'react';
import { useRecoilValue } from 'recoil';
import { TotalTypes } from 'lib/type';
import { daySearch } from 'recoil/atom';
import { todayCall } from 'lib/day';
import './styles.scss';

interface Props {
    globalTotal: TotalTypes;
}

const Header = ({ globalTotal }: Props) => {
    const currentSearch = useRecoilValue(daySearch);
    const totalSum: string = globalTotal.globalToTalBTC.toFixed(0);

    return (
        <header className="board2__header">
            <h1>
                <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="빗썸 로고" />
                <strong>
                    전세계 실시간 거래 순위<span>{currentSearch === todayCall ? '(실시간)' : `(${currentSearch})`}</span>
                </strong>
            </h1>

            <div className="board2__right">
                <p>
                    <strong className="totalDeal">전세계 거래총액</strong>
                    <span>{Number(totalSum).toLocaleString()} BTC / KRW</span>
                    <span> {globalTotal.globalTotalVolume.toLocaleString()} million</span>
                </p>
                <p>
                    <strong className="totalDeal">
                        국내 5사 거래액 <span>KRW {globalTotal.domesticTotalVolume.toLocaleString()} million*</span>
                    </strong>
                </p>
            </div>
        </header>
    );
};

export default Header;
