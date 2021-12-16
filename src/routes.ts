import React from 'react';
import BagPage from 'pages/bag';
import DetailsPage from 'pages/details';
import HomePage from 'pages/home';

export interface IRoute {
  path: string;
  component: React.FC;
}

export const ROUTES: IRoute[] = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/details/:pokemonId',
    component: DetailsPage,
  },
  {
    path: '/bag',
    component: BagPage,
  },
];
