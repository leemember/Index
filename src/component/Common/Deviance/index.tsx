import React from 'react';
import { Empty, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import './styles.scss';

const Deviance = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate('/', { replace: true });
    };

    return (
        <main className="noData">
            <div className="noData__center">
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} className="dataBox" description="잘못된 접근입니다." />
                <Button shape="round" className="backButton" onClick={goBack}>
                    이전으로
                </Button>
            </div>
        </main>
    );
};

export default Deviance;
