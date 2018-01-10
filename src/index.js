import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {RouterProvider} from 'react-router5'

import './index.css';
import router from './router'
import Root from './view/root/Root';

router.start()
ReactDOM.render(
  <RouterProvider router={router}>
    <Root />
  </RouterProvider>,
  document.getElementById('root')
);
registerServiceWorker();
