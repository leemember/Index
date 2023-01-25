import React from 'react';
import './styles.scss';
import { useRecoilValue } from 'recoil';
import { daySearch } from 'recoil/atom';
import { todayCall } from 'lib/day';

const Header = () => {
    const currentSearch = useRecoilValue(daySearch);

    return (
        <header className="board1__header">
            <h1>
                비트코인 거래소 거래량 순위<span> {currentSearch === todayCall ? '(실시간)' : `(${currentSearch})`}</span>
            </h1>
        </header>
    );
};

export default Header;
