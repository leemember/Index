import { selector, selectorFamily } from 'recoil';
import fetcher from 'lib/api';
import { METHOD } from 'lib/type';
import { daySearch } from '../atom';
import moment from 'moment';
import { todayCall } from 'lib/day';

// 국내 코인 거래소 인덱스
export const getDomeCoinListApi = selectorFamily({
    key: 'get/DomeCoinListRanking',
    get: (day: any) => async () => {
        if (!day) {
            return false;
        }
        const res = await fetcher(METHOD.GET, `/domestic/coinList?toDate=${day}`);
        return res.data;
    }
});

export const getDomeRankListApi = selectorFamily({
    key: 'get/DomeRankingList',
    get: (day: any) => async () => {
        if (!day) {
            return false;
        }
        const res = await fetcher(METHOD.GET, `/domestic/rank?toDate=${day}`);
        return res.data;
    }
});

export const getDomeTotalApi = selectorFamily({
    key: 'get/DomeTotal',
    get: (day: any) => async () => {
        if (!day) {
            return false;
        }
        const res = await fetcher(METHOD.GET, `/domestic/total?toDate=${day}`);
        return res.data;
    }
});

// 글로벌 코인 거래소 인덱스
export const getGlobalCoinListApi = selectorFamily({
    key: 'get/GlobalCoinList',
    get: (day: any) => async () => {
        if (!day) {
            return false;
        }
        const res = await fetcher(METHOD.GET, `/global/coinList?toDate=${day}`);
        console.log('res', res);
        return res.data;
    }
});

export const getGlobalDomeRankListApi = selectorFamily({
    key: 'get/GlobalDomeRank',
    get: (day: any) => async () => {
        if (!day) {
            return false;
        }
        const res = await fetcher(METHOD.GET, `/global/domesticRank?toDate=${day}`);
        return res.data;
    }
});

export const getGlobalRankListApi = selectorFamily({
    key: 'get/GlobalRankingList',
    get: (day: any) => async () => {
        if (!day) {
            return false;
        }
        const res = await fetcher(METHOD.GET, `/global/globalRank?toDate=${day}`);
        return res.data;
    }
});

export const getGlobalTotalApi = selectorFamily({
    key: 'get/GlobalTotal',
    get: (day: any) => async () => {
        if (!day) {
            return false;
        }
        const res = await fetcher(METHOD.GET, `/global/total?toDate=${day}`);
        return res.data;
    }
});

export const changeDate = selector({
    key: 'get/changeDate',
    get: ({ get }) => {
        const clickDay = get(daySearch).replaceAll('-', '');
        return clickDay;
    }
});

export const dayValue = selector({
    key: 'dayValueText',
    get: ({ get }) => {
        const value = get(daySearch);
        if (value === todayCall) {
            return null;
        }
        return moment(value, 'YYYY-MM-DD');
    }
});
