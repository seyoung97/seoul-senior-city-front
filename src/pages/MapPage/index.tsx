import { useEffect } from 'react';

import styles from './mapPage.module.scss';

declare global {
  interface Window {
    kakao: any;
  }
}

const MapPage = () => {
  const KAKAO_API_KEY = import.meta.env.VITE_KAKAO_MAP_API_KEY;
  console.log(import.meta.env);

  useEffect(() => {
    // 1. 카카오맵 스크립트 로드
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_API_KEY}&autoload=false`;
    script.async = true;

    script.onload = () => {
      window.kakao.maps.load(() => {
        // 2. 지도 생성
        const container = document.getElementById('map')!;
        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.978), // 서울 중심
          level: 9,
        };
        const map = new window.kakao.maps.Map(container, options);

        // 3. 백엔드에서 받은 예시 데이터
        const rankData = [
          { district: '강남구', rank: 1, lat: 37.5172, lng: 127.0473 },
          { district: '마포구', rank: 2, lat: 37.5635, lng: 126.9084 },
          { district: '성동구', rank: 3, lat: 37.5633, lng: 127.0365 },
          { district: '광진구', rank: 4, lat: 37.5384, lng: 127.0823 },
          { district: '용산구', rank: 5, lat: 37.5323, lng: 126.9901 },
        ];

        // 4. 순위 마커 + 오버레이 표시
        rankData.forEach(({ district, rank, lat, lng }) => {
          const position = new window.kakao.maps.LatLng(lat, lng);

          // 마커 생성
          new window.kakao.maps.Marker({
            position,
            map,
          });

          // 순위 오버레이
          const content = `
            <div style="
              background: #2ecc71;
              color: white;
              padding: 4px 8px;
              border-radius: 12px;
              font-weight: bold;
              font-size: 13px;
              box-shadow: 0 1px 6px rgba(0,0,0,0.1);
            ">
              ${rank}위
            </div>
          `;

          new window.kakao.maps.CustomOverlay({
            position,
            content,
            yAnchor: 1,
            zIndex: 10,
          });
        });
      });
    };

    document.head.appendChild(script);
  }, [KAKAO_API_KEY]);

  return (
    <main className={styles.wrapper}>
      <div id="map" style={{ width: '100%', height: '100%' }}></div>
    </main>
  );
};

export default MapPage;
