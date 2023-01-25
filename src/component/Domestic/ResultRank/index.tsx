import React from 'react';
import { Rank, TotalTypes } from 'lib/type';
import './styles.scss';

interface Props {
    rank: Rank[];
    globalKrw: TotalTypes;
}
const ResultRank = ({ rank, globalKrw }: Props) => {
    return (
        <section className="board1__rank-detail-result">
            <table>
                <thead>
                    <tr>
                        <th>전세계 순위</th>
                        <td className="center">#{rank[0].ranking}</td>
                        <td>{rank[0].globalShareRate.toFixed(1)}%</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>전세계 거래금액(KRW)</th>
                        <td colSpan={2}>{globalKrw.globalTotalVolume.toLocaleString()}</td>
                    </tr>
                </tbody>
            </table>

            <div>
                <h4>*단위 : 백만원</h4>
            </div>
        </section>
    );
};

export default ResultRank;
