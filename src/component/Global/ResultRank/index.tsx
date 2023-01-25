import React from 'react';
import './styles.scss';

const ResultRank = () => {
    const today = new Date();

    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);

    const todayDate = year + '-' + month + '-' + day;

    return (
        <footer className="board2__result--rank">
            <table className="board2__result--table user">
                <thead>
                    <tr>
                        <th className="tg-0pky" rowSpan={2}>
                            해외 휴대폰번호 가입자 비율
                        </th>
                        <td className="tg-0pky">날짜</td>
                        <td className="tg-0pky">날짜</td>
                        <td className="tg-0pky">{todayDate}</td>
                    </tr>
                    <tr>
                        <td className="tg-0pky">비율</td>
                        <td className="tg-0pky">비율</td>
                        <td className="tg-0pky">비율</td>
                    </tr>
                </thead>
            </table>

            <table className="board2__result--table">
                <thead>
                    <tr>
                        <th className="tg-0pky" rowSpan={2}>
                            해외 휴대폰번호 거래액
                        </th>
                        <td className="tg-0pky">날짜</td>
                        <td className="tg-0pky">날짜</td>
                        <td className="tg-0pky">{todayDate}</td>
                    </tr>
                    <tr>
                        <td className="tg-0pky">비율</td>
                        <td className="tg-0pky">비율</td>
                        <td className="tg-0pky">비율</td>
                    </tr>
                </thead>
            </table>
        </footer>
    );
};

export default ResultRank;
