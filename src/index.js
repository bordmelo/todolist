import React from 'react';
import { render } from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

import Layout from './pages/Layout';
import './style/theme.css';


import * as serviceWorker from './serviceWorker';

library.add(faCircle);

render(
  <Layout />,
  document.getElementById('root')
);

serviceWorker.unregister();
