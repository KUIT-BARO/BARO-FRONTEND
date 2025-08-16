import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import { ROUTES } from '@router/constant/Routes';
import Layout from './Layout';

const NotFound = lazy(() => import('@shared/components/notFound/NotFound'));
const Home = lazy(() => import('@pages/home/Home'));
const Login = lazy(() => import('@pages/logIn/LogIn'));
const MyPage = lazy(() => import('@pages/myPage/MyPage'));
const Explore = lazy(() => import('@pages/explore/Explore'));
const PinAdd = lazy(() => import('@pages/pinAdd/PinAdd'));
const PromiseManage = lazy(() => import('@pages/promiseManage/PromiseManage'));
const PromiseProposal = lazy(() => import('@pages/promiseProposal/PromiseProposal'));
const PromiseSelect = lazy(() => import('@pages/promiseSelect/PromiseSelect'));
const PromiseVote = lazy(() => import('@pages/promiseVote/PromiseVote'));
const PromiseStatus = lazy(() => import('@pages/promiseStatus/PromiseStatus'));

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
        path: ROUTES.EXPLORE,
        element: <Explore />,
      },
      {
        path: ROUTES.PIN_ADD,
        element: <PinAdd />,
      },
      {
        path: ROUTES.PROMISE_MANAGE,
        element: <PromiseManage />,
      },
      {
        path: ROUTES.PROMISE_PROPOSAL,
        element: <PromiseProposal />,
      },
      {
        path: ROUTES.PROMISE_SELECT,
        element: <PromiseSelect />,
      },
      {
        path: ROUTES.PROMISE_VOTE,
        element: <PromiseVote />,
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
