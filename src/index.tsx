import React from 'react';
import ReactDOM from 'react-dom';
import { DeviceThemeProvider } from '@sberdevices/plasma-ui/components/Device'; // Типографика, имеющая размеры, зависимые от типа устройства
import { lightJoy } from '@sberdevices/plasma-tokens/themes'; // Или один из списка: darkEva, darkJoy, lightEva, lightJoy, lightSber
import { HashRouter } from 'react-router-dom';
import App from './App/App';
import GlobalStyle from './App/GlobalStyle';
import './index.scss';
import reportWebVitals from './reportWebVitals';

const BASE_PATH = process.env.PUBLIC_URL;

ReactDOM.render(
  <React.StrictMode>
    <DeviceThemeProvider theme={lightJoy}>
      <GlobalStyle />
      <HashRouter basename={BASE_PATH}>
        <App />
      </HashRouter>
    </DeviceThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
