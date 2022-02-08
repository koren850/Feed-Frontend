import React from 'react';

// const { Switch, Route } = ReactRouterDOM
import { Routes, Route } from 'react-router';

import routes from './routes';

import { AppHeader } from './cmps/app-header';
import { AppFooter } from './cmps/app-footer';
import { UserDetails } from './pages/user-details';
import { Feed } from './pages/Feed';

export class RootCmp extends React.Component {
  render() {
    return (
      <div>
        <Feed />
      </div>
    );
  }
}
