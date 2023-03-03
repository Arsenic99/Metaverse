import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Mainnet, DAppProvider, Config } from '@usedapp/core';
import App from './App';

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {},
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <DAppProvider config={config}>
      <Provider store={store as any}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </DAppProvider>
);
