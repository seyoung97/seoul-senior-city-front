import { useState } from 'react';

import { CustomOverlayMap, Map, MapMarker, useKakaoLoader } from 'react-kakao-maps-sdk';
import { Bar, BarChart, LabelList, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import BottomSheet from '@/components/BottomSheet';
import Footer from '@/components/Footer';
import SelectDropdown from '@/components/SelectDropdown';
import { CATEGORY_OPTIONS } from '@/constants/mapCategoryOptions';
import { useMapDistrictQuery } from '@/hooks/queries/useMapDistrictQuery';
import { MapModeOption, MapResponse } from '@/services/types';

import styles from './mapPage.module.scss';

interface MetricData {
  name: string;
  selectedDistrict: number;
  average: number;
}

const data: MetricData[] = [
  { name: '치안', selectedDistrict: 12, average: 9.5 },
  { name: '병원접근성', selectedDistrict: 18, average: 14.2 },
  { name: '보행환경', selectedDistrict: 15, average: 13.8 },
  { name: '노인일자리', selectedDistrict: 7, average: 6.4 },
];

declare global {
  interface Window {
    kakao: any;
  }
}

const MapPage = () => {
  useKakaoLoader({ appkey: import.meta.env.VITE_KAKAO_MAP_API_KEY });

  const [selectedCategory, setSelectedCategory] = useState('top');
  const [selectedDistrict, setSelectedDistrict] = useState<MapResponse | null>(null);

  const selectedOption = CATEGORY_OPTIONS.find((opt) => opt.value === selectedCategory);

  let modeOption: MapModeOption = 'friendly';

  if (selectedOption?.mode === 'friendly' || selectedOption?.mode === 'unfriendly') {
    modeOption = selectedOption.mode;
  } else if (selectedOption?.mode === 'category') {
    modeOption = {
      mode: 'category',
      category: selectedOption.category,
    };
  }
  const { data: districtData, isLoading } = useMapDistrictQuery(modeOption);
  console.log(districtData);

  return (
    <main className={styles.wrapper}>
      <div className={styles.topBar}>
        <SelectDropdown value={selectedCategory} onChange={setSelectedCategory} options={CATEGORY_OPTIONS} />
      </div>
      <Map center={{ lat: 37.5665, lng: 126.978 }} level={9} className={styles.map}>
        {districtData?.data?.map(({ latitude, longitude, rank, district, info, metricData }) => (
          <>
            <MapMarker
              key={district}
              position={{ lat: longitude, lng: latitude }}
              onClick={() => setSelectedDistrict({ latitude, longitude, rank, district, info, metricData })}
            />
            <CustomOverlayMap position={{ lat: longitude, lng: latitude }} yAnchor={3}>
              <div className={styles.mapMarker}>
                {rank}위 {district}
              </div>
            </CustomOverlayMap>
          </>
        ))}
      </Map>
      {selectedDistrict && (
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            background: 'white',
            padding: '16px',
            boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h3 style={{ margin: 0 }}>{selectedDistrict.district}</h3>
          <p style={{ marginTop: 8 }}>{selectedDistrict.info}</p>
        </div>
      )}
      <BottomSheet isOpen={Boolean(selectedDistrict)} onClose={() => setSelectedDistrict(null)}>
        {selectedDistrict && (
          <>
            <div className={styles.bottom}>
              <h3 style={{ margin: '0 0 8px' }}>{selectedDistrict.district}</h3>
              <p style={{ fontSize: '14px', color: '#333' }}>{selectedDistrict.info}</p>
            </div>
            <ResponsiveContainer width="100%" height={'100%'}>
              <BarChart
                layout="vertical"
                data={selectedDistrict.metricData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" />
                <Tooltip />
                <Legend />
                <Bar dataKey="average" fill="#B0B8C1" name="전체 평균">
                  <LabelList dataKey="average" position="right" />
                </Bar>
                <Bar dataKey="selectedDistrict" fill="#00CD80" name={selectedDistrict.district}>
                  <LabelList dataKey="selectedDistrict" position="right" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </>
        )}
      </BottomSheet>
      <Footer />
    </main>
  );
};

export default MapPage;
