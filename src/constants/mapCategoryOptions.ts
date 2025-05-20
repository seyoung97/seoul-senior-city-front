// import { SelectOption } from '@/components/SelectDropdown';

export type SelectOption =
  | {
      value: string;
      label: string;
      mode: 'friendly' | 'unfriendly';
    }
  | {
      value: string;
      label: string;
      mode: 'category';
      category: string;
    };

export const CATEGORY_OPTIONS: SelectOption[] = [
  {
    value: 'top',
    label: '고령 친화 자치구 (상위 5개)',
    mode: 'friendly',
  },
  {
    value: 'bottom',
    label: '고령 비친화 자치구 (하위 5개)',
    mode: 'unfriendly',
  },
  {
    value: 'safety',
    label: '치안이 좋은 자치구',
    mode: 'category',
    category: '치안',
  },
  {
    value: 'walkability',
    label: '보행환경이 좋은 자치구',
    mode: 'category',
    category: '보행환경',
  },
  {
    value: 'publicTransit',
    label: '대중교통이 잘되어있는 자치구',
    mode: 'category',
    category: '대중교통',
  },
  {
    value: 'hospital',
    label: '병원 접근성이 좋은 자치구',
    mode: 'category',
    category: '병원',
  },
  {
    value: 'welfare',
    label: '노인복지시설이 많은 자치구',
    mode: 'category',
    category: '복지시설',
  },
  {
    value: 'culture',
    label: '문화시설이 많은 자치구',
    mode: 'category',
    category: '문화시설',
  },
  {
    value: 'seniorCommunity',
    label: '경로당이 많은 자치구',
    mode: 'category',
    category: '경로당',
  },
  {
    value: 'seniorEmployment',
    label: '노인일자리가 많은 자치구',
    mode: 'category',
    category: '노인일자리',
  },
  {
    value: 'airQuality',
    label: '대기환경이 좋은 자치구',
    mode: 'category',
    category: '대기환경',
  },
  {
    value: 'greenSpace',
    label: '공원과 나무가 많은 자치구',
    mode: 'category',
    category: '녹지',
  },
];
