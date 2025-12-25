import { createBrowserRouter, Navigate } from 'react-router-dom';
import BaseLayout from './components/layout/BaseLayout';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import CityList from './pages/city/list';
import CityDetail from './pages/city/detail';
import Tickets from './pages/Tickets';
import Collection from './pages/Collection';
import ArtistIntro from './pages/ArtistIntro';
import NotFound from './pages/NotFound';
import { ROUTER_PATH } from './constants';

const router = createBrowserRouter([
  {
    index: true,
    element: <Navigate to={ROUTER_PATH.HOME} replace />,
  },
  {
    path: ROUTER_PATH.BASE,
    element: <BaseLayout />,
    children: [
      {
        path: ROUTER_PATH.HOME,
        element: <Home />,
      },
      {
        path: ROUTER_PATH.TIME_LINE,
        element: <Timeline />,
      },
      {
        path: ROUTER_PATH.CITY_LIST,
        element: <CityList />,
      },
      {
        path: ROUTER_PATH.CITY_DETAIL,
        element: <CityDetail />,
      },
      {
        path: ROUTER_PATH.TICKETS,
        element: <Tickets />,
      },
      {
        path: ROUTER_PATH.COLLECTION,
        element: <Collection />,
      },
      {
        path: ROUTER_PATH.ARTIST_INTRODUCTION,
        element: <ArtistIntro />,
      },
    ],
  },
  {
    path: ROUTER_PATH.NOT_FOUND,
    element: <NotFound />,
  },
  {
    path: '*',
    element: <Navigate to={ROUTER_PATH.NOT_FOUND} replace />,
  },
]);

export default router;
