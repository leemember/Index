import React from 'react';
import { Rank } from 'lib/type';
import './styles.scss';

interface Props {
    rankList: Rank[];
}
const Summary = ({ rankList }: Props) => {
    return (
        <section className="board1__topSummary">
            {rankList.map((item: Rank, index: number) => {
                let domesticShareRate = item.domesticShareRate.toFixed(2);
                let globalShareRate = item.globalShareRate.toFixed(2);

                return (
                    <div key={index} className={item.exchangeMetaId}>
                        <ul>
                            <li>
                                {/* 거래소명 | 순위 */}
                                <p>
                                    {item.exchangeMetaName} #{item.ranking}
                                </p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                {/* 국내 점유율 | 국제 점유율 */}
                                <p>{domesticShareRate}%</p>
                                <p>({globalShareRate})%</p>
                            </li>
                        </ul>
                    </div>
                );
            })}
        </section>
    );
};

export default Summary;
