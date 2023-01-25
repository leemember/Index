import React from 'react';
import moment from 'moment';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { daySearch } from 'recoil/atom';
import { dayValue } from 'recoil/selector';
import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';
import { todayCall } from 'lib/day';
import './styles.scss';

const Search = () => {
    const setCurrent: any = useSetRecoilState(daySearch);
    const value = useRecoilValue(dayValue);

    const onChangeDate: DatePickerProps['onChange'] = (date, dateString) => {
        setCurrent(`${dateString}`);
    };

    // 실시간
    const reloadButton = () => {
        setCurrent(todayCall);
    };

    return (
        <section className="search">
            <DatePicker
                onChange={onChangeDate}
                className="dataInput"
                format="YYYY-MM-DD"
                placeholder="날짜를 선택해주세요."
                allowClear={false}
                value={value}
                disabledDate={(current: any) => {
                    // 이 날부터 ~ 이 날 까지만 선택 가능
                    return current.year() < 2020 || current >= moment().subtract(1, 'days').toDate();
                }}
            />
            <button className="btn-now" id="searchNowBtn" type="button" onClick={reloadButton}>
                실시간
            </button>
        </section>
    );
};

export default Search;
