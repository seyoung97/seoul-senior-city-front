import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import Layout from '@/components/Layout';
import CustomDistrictFinderPage from '@/pages/CustomDistrictFinderPage';
import MainPage from '@/pages/MainPage';
import MapPage from '@/pages/MapPage';

const router = (
  <Route element={<Layout />}>
    <Route index element={<MainPage />} />
    <Route path="map" element={<MapPage />} />
    <Route path="custom-district-finder" element={<CustomDistrictFinderPage />} />
  </Route>
);

const rootRouter = createBrowserRouter(createRoutesFromElements(router));

export default rootRouter;
