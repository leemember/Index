import React from 'react';
import { Rank } from 'lib/type';
import './styles.scss';

interface Props {
    domeRanking: Rank[];
}
// 국내 순위
const DomesticSummary = ({ domeRanking }: Props) => {
    return (
        <ul className="board2__domestic">
            {domeRanking.map((item: Rank, index: number) => {
                return (
                    <li key={index}>
                        <div className="board2__domestic--round">
                            {/* 국내 순위 */}
                            <h5 className="board2__ranking">{item.ranking}위</h5>
                        </div>

                        <div className="board2__domestic--center">
                            {/* 국내 거래소 */}
                            <p className="board2__domestic--company">{item.exchangeMetaName}</p>
                            {/* 국내 거래 점유율 */}
                            <p className="board2__domestic--per">{item.domesticShareRate.toFixed(2)}%</p>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};

export default DomesticSummary;
