import React from 'react';
import axios from 'axios';
import { METHOD } from './type';

const apis = axios.create({
    baseURL: `${process.env.REACT_APP_INDEX_SERVER_URL}` // 기본 서버 주소 입력
});

const fetcher = async (method: METHOD, url: string) => {
    try {
        const res = await apis[method](url);
        return res.data;
    } catch (error: any) {
        alert('데이터가 없습니다.')
        location.reload();
        return error;
    }
};

export default fetcher;
