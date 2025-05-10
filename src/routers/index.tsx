import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import Layout from '@/components/Layout';
import MainPage from '@/pages/MainPage';

const router = (
  <Route element={<Layout />}>
    <Route index element={<MainPage />} />
  </Route>
);

const rootRouter = createBrowserRouter(createRoutesFromElements(router));

export default rootRouter;
