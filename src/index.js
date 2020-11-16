import React from 'react';
import ReactDOM from 'react-dom';
import Imp_notice from './Components/Imp_notice'
import Header from './Components/Header'
import Slider from './Components/Slider'
import Cards from './Components/Cards'

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Slider />
    <Imp_notice/>
    <Cards />
  </React.StrictMode>,
  document.getElementById('root')
);
