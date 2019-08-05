import React, {Component} from  'react';
import { Route,Link} from 'react-router-dom';
// import Loadable from 'react-loadable';
import {RouteWithSubRoutes} from './utils';

// const Loading = (props) => {
//   return <div>Loadingc...</div>
// };

// const D = Loadable({
//   loader: () => import('./d.js'),
//   loading: Loading,
// })

export default ({ routes }) => (
  <div>
      this is C
      <Link to='/C/D'>to D</Link> <br />
      <Link to="/C/E">to E</Link> <br />
      {/* {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)} */}
    </div>
);