import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import { ROUTES } from '@router/constant/Routes';
import Layout from './Layout';

const NotFound = lazy(() => import('@shared/components/notFound/NotFound'));
const Home = lazy(() => import('@pages/home/Home'));
const Login = lazy(() => import('@pages/logIn/LogIn'));
const MyPage = lazy(() => import('@pages/myPage/MyPage'));
const Search = lazy(() => import('@pages/search/Search'));
const Promise = lazy(() => import('@pages/promise/Promise'));
const PromiseStatus = lazy(() => import('@pages/promiseStatus/PromiseStatus'));
const Setting = lazy(() => import('@pages/setting/Setting'));
const Profile = lazy(() => import('@pages/profile/Profile'));

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: ROUTES.LOGIN,
        element: <Login />,
      },
      {
        path: ROUTES.MYPAGE,
        element: <MyPage />,
      },
      {
        path: ROUTES.SEARCH,
        element: <Search />,
      },
      {
        path: ROUTES.PROMISE,
        element: <Promise />,
      },
      {
        path: ROUTES.SETTING,
        element: <Setting />,
      },
      {
        path: ROUTES.PROFILE,
        element: <Profile />,
      },
      {
        path: ROUTES.PROMISE_STATUS,
        element: <PromiseStatus />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
