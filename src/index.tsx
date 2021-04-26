import React from 'react';
import ReactDOM from 'react-dom';
import { DeviceThemeProvider } from '@sberdevices/plasma-ui/components/Device'; // Типографика, имеющая размеры, зависимые от типа устройства
import { BrowserRouter } from 'react-router-dom';
import App from './App/App';
import GlobalStyle from './App/GlobalStyle';
import './index.scss';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <DeviceThemeProvider>
      <GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DeviceThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
