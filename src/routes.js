import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import EventIndex from './components/event_index';
import AddEvent from './components/add_event';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={EventIndex} />
    <Route path='event/new' component={AddEvent} />
  </Route>
)
