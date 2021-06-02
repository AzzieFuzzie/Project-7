import React from 'react';
import App from './Components/App';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>{<App />}</React.StrictMode>,
  document.getElementByClassName('.container')
);

reportWebVitals();
