import React from 'react';
import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import plusFill from '@iconify/icons-eva/plus-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';

// ----------------------------------------------------------------------

const getIcon = (name: any) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard',
    icon: getIcon(pieChart2Fill),
  },
  {
    title: 'create new',
    path: '/create',
    icon: getIcon(plusFill),
    children: [
      {
        title: 'chart',
        path: '/create/chart/new/upload',
      },
      {
        title: 'map',
        path: '/create/map',
      },
      {
        title: 'table',
        path: '/create/table',
      },
    ],
  },
  {
    title: 'library',
    path: '/library',
    icon: getIcon(shoppingBagFill),
  },
];

export default sidebarConfig;
