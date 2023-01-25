// API 통신 메서드
export enum METHOD {
    GET = 'get',
    POST = 'post'
}

export interface Rank {
    // 코인 코드
    exchangeMetaId: string;
    // 코인 한글명
    exchangeMetaName: string;
    // 국내 거래소 거래 점유율
    domesticShareRate: number;
    // 글로벌 거래소 거래 점유율
    globalShareRate: number;
    // 거래소 순위
    ranking: number;
}

export interface CoinList {
    //코인 코드
    exchangeMetaId: string;
    //코인 한글명
    name: string;
    //국내 거래소 거래 가격
    volume: number;
    //국내 거래소 거래 가격
    volumeKrw: number;
    //코인 거래량
    volumeEtc: number;
    //국내 코인 거래 점유율
    domesticCoinShareRate: number;
    //글로벌 코인 거래 점유율
    globalCoinShareRate: number;
    //심볼명
    symbol: string;
}

export interface TotalTypes {
    // 글로벌 전체 BTC
    globalToTalBTC: number;
    // 글로벌 전체 금액
    globalTotalVolume: number;
    // 국내 전체 금액
    domesticTotalVolume: number;
}
