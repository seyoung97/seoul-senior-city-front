import { useState } from 'react';

import { CustomOverlayMap, Map, MapMarker, useKakaoLoader } from 'react-kakao-maps-sdk';
import { Bar, BarChart, LabelList, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import BottomSheet from '@/components/BottomSheet';
import SelectDropdown from '@/components/SelectDropdown';
import { CATEGORY_OPTIONS } from '@/constants/mapCategoryOptions';

import styles from './mapPage.module.scss';

interface District {
  district: string;
  rank: number;
  lat: number;
  lng: number;
  info: string;
}

interface SelectedDistrict {
  district: string;
  info: string;
}

interface MetricData {
  name: string;
  selectedDistrict: number;
  average: number;
}

const rankData: District[] = [
  { district: '강남구', rank: 1, lat: 37.5172, lng: 127.0473, info: '강남구는 안전하고 편의시설이 많아요.' },
  { district: '마포구', rank: 2, lat: 37.5635, lng: 126.9084, info: '마포구는 공원이 많고 대중교통이 편리해요.' },
  {
    district: '성동구',
    rank: 3,
    lat: 37.5633,
    lng: 127.0365,
    info: '성동구는 보행자 친화적이고 복지시설이 잘 돼 있어요.',
  },
  { district: '광진구', rank: 4, lat: 37.5384, lng: 127.0823, info: '광진구는 문화시설이 풍부해요.' },
  { district: '용산구', rank: 5, lat: 37.5323, lng: 126.9901, info: '용산구는 병원 접근성이 좋아요.' },
];

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
  const [selectedDistrict, setSelectedDistrict] = useState<SelectedDistrict | null>(null);

  return (
    <main className={styles.wrapper}>
      <div className={styles.topBar}>
        <SelectDropdown value={selectedCategory} onChange={setSelectedCategory} options={CATEGORY_OPTIONS} />
      </div>
      <Map center={{ lat: 37.5665, lng: 126.978 }} level={9} className={styles.map}>
        {rankData.map(({ lat, lng, rank, district, info }) => (
          <>
            <MapMarker key={district} position={{ lat, lng }} onClick={() => setSelectedDistrict({ district, info })} />
            <CustomOverlayMap position={{ lat, lng }} yAnchor={3}>
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
            <div>
              <h3 style={{ margin: '0 0 8px' }}>{selectedDistrict.district}</h3>
              <p style={{ fontSize: '14px', color: '#333' }}>{selectedDistrict.info}</p>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart layout="vertical" data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" />
                <Tooltip />
                <Legend />
                <Bar dataKey="average" fill="#f08080" name="전체 평균">
                  <LabelList dataKey="average" position="right" />
                </Bar>
                <Bar dataKey="selectedDistrict" fill="#6495ed" name="선택된 자치구">
                  <LabelList dataKey="selectedDistrict" position="right" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </>
        )}
      </BottomSheet>
    </main>
  );
};

export default MapPage;
