import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import App from './app/App';

import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);