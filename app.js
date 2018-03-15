import React from 'react';
import ReactDOM from 'react-dom';

import Calculator from './app/calculator';

document.addEventListener('DOMContentLoaded', ()=> {
  ReactDOM.render(<Calculator />, document.getElementById('main'))
});
