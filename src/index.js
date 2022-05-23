import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import App from './routes/App';
import "./styles/GlobalStyles.css";
import "swiper/css/bundle";



ReactDOM.render(
  <HashRouter>
      <App/>
  </HashRouter>,
  document.getElementById('root')
);


