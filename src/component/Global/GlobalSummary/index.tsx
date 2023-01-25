import React from 'react';
import { Rank } from 'lib/type';
import './styles.scss';

interface Props {
    globalRanking: Rank[];
}
// 글로벌 순위
const GlobalSummary = ({ globalRanking }: Props) => {
    return (
        <ul className="board2__global">
            {globalRanking.map((item: Rank, index: number) => {
                return (
                    <li key={index}>
                        <div className="board2__ranking--round">
                            {/* 글로벌 순위 */}
                            <h5 className="board2__ranking">{item.ranking}위</h5>
                        </div>

                        {/* 글로벌 거래소 */}
                        <p className="board2__ranking--company">{item.exchangeMetaName}</p>
                        {/* 글로벌 거래 점유율 */}
                        <p className="board2__ranking--per">{item.globalShareRate.toFixed(2)}%</p>
                    </li>
                );
            })}
        </ul>
    );
};

export default GlobalSummary;
