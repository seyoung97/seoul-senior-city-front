import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import Layout from '@/components/Layout';
import CustomDistrictFinderPage from '@/pages/CustomDistrictFinderPage';
import LifeStylePage from '@/pages/LifeStylePage';
import LifeStyleWalkPage from '@/pages/LifeStylePage/LifeStyleWalkPage';
import MainPage from '@/pages/MainPage';
import MapPage from '@/pages/MapPage';

const router = (
  <Route element={<Layout />}>
    <Route index element={<MainPage />} />
    <Route path="map" element={<MapPage />} />
    <Route path="custom-district-finder" element={<CustomDistrictFinderPage />} />
    <Route path="life-style-district" element={<LifeStylePage />} />
    <Route path="life-style-walk" element={<LifeStyleWalkPage />} />
    <Route path="life-style-transportation" element={<LifeStyleWalkPage />} />
  </Route>
);

const rootRouter = createBrowserRouter(createRoutesFromElements(router));

export default rootRouter;
