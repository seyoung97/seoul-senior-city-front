import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import Layout from '@/components/Layout';
import CustomDistrictFinderPage from '@/pages/CustomDistrictFinderPage';
import LifeStylePage from '@/pages/LifeStylePage';
import LifeStyleCommunityPage from '@/pages/LifeStylePage/LifeStyleCommunityPage';
import LifeStyleCulturePage from '@/pages/LifeStylePage/LifeStyleCulturePage';
import LifeStyleHospitalPage from '@/pages/LifeStylePage/LifeStyleHospitalPage';
import LifeStyleSportsPage from '@/pages/LifeStylePage/LifeStyleSportsPage';
import LifeStyleWalkPage from '@/pages/LifeStylePage/LifeStyleWalkPage';
import MainPage from '@/pages/MainPage';
import MapPage from '@/pages/MapPage';
import RankingCategoryPage from '@/pages/RankingCategoryPage';
import RankingDistrictPage from '@/pages/RankingDistrictPage';

const router = (
  <Route element={<Layout />}>
    <Route index element={<MainPage />} />
    <Route path="map" element={<MapPage />} />
    <Route path="custom-district-finder" element={<CustomDistrictFinderPage />} />
    <Route path="life-style-district" element={<LifeStylePage />} />
    <Route path="life-style-walk" element={<LifeStyleWalkPage />} />
    <Route path="life-style-transportation" element={<LifeStyleWalkPage />} />
    <Route path="life-style-hospital" element={<LifeStyleHospitalPage />} />
    <Route path="life-style-community" element={<LifeStyleCommunityPage />} />
    <Route path="life-style-culture" element={<LifeStyleCulturePage />} />
    <Route path="life-style-sports" element={<LifeStyleSportsPage />} />
    <Route path="ranking-district" element={<RankingDistrictPage />} />
    <Route path="ranking-category" element={<RankingCategoryPage />} />
  </Route>
);

const rootRouter = createBrowserRouter(createRoutesFromElements(router));

export default rootRouter;
