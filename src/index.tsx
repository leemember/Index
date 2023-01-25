import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Spin } from 'antd';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import 'antd/dist/antd.min.css';
import './index.scss';
const App = lazy(() => import('./App'));

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const queryClient = new QueryClient();

root.render(
    <QueryClientProvider client={queryClient}>
        {/* devtools */}
        <ReactQueryDevtools initialIsOpen={true} />
        <RecoilRoot>
            <Suspense
                fallback={
                    <main className="loading__spinner">
                        <Spin size="large" />
                    </main>
                }
            >
                <App />
            </Suspense>
        </RecoilRoot>
    </QueryClientProvider>
);
