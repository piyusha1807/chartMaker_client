/* eslint-disable react/react-in-jsx-scope */
import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
// //
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import Charts from './pages/Charts';
import DashboardApp from './pages/DashboardApp';
// import Products from './pages/Products';
// import Blog from './pages/Blog';
// import { UserAdd, UserTable } from './pages/User';
import NotFound from './pages/Page404';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { path: '', element: <Navigate to="dashboard " replace /> },
        { path: 'dashboard', element: <DashboardApp /> },
        {
          path: 'create',
          children: [
            { path: '', element: <Navigate to="chart/new/upload" replace /> },
            { path: 'chart/:chartId/:stepName', element: <Charts /> },
          ],
        },
        // { path: 'new/map', element: <UserAdd /> },
        // { path: 'new/table', element: <UserAdd /> },
        // { path: 'library', element: <Charts /> },
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        // { path: '/', element: <Navigate to="/dashboard" /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
