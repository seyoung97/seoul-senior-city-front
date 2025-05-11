import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import Layout from '@/components/Layout';
import MainPage from '@/pages/MainPage';
import MapPage from '@/pages/MapPage';

const router = (
  <Route element={<Layout />}>
    <Route index element={<MainPage />} />
    <Route path="map" element={<MapPage />} />
  </Route>
);

const rootRouter = createBrowserRouter(createRoutesFromElements(router));

export default rootRouter;
