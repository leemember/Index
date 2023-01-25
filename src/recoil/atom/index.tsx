import { atom } from 'recoil';
import { TotalTypes } from 'lib/type';
import { todayCall } from 'lib/day';

/**
 * 전체 금액 (공통으로 사용)
 */
export const totalRate = atom<TotalTypes>({
    key: 'totalRate',
    default: {
        // 글로벌 전체 BTC
        globalToTalBTC: 0,
        // 글로벌 전체 금액
        globalTotalVolume: 0,
        // 국내 전체 금액
        domesticTotalVolume: 0
    }
});

export const daySearch = atom({
    key: 'daySearchShow',
    default: todayCall || ''
});

export const errorState = atom<any>({
    key: 'error',
    default: ''
});
