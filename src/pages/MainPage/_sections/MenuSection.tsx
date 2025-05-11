import { Link } from 'react-router-dom';

import { checklist, heart, map } from '@/assets/images/index';
import MenuItem from '@/components/MenuItem';

import styles from './menuSection.module.scss';

const menus = [
  { src: map, alt: '지도', label: '지도에서 동네 찾기', path: '/map' },
  { src: checklist, alt: '체크리스트', label: '나만의 맞춤 동네 찾기', path: '/find_my_district' },
  { src: heart, alt: '하트', label: '생활 방식에 맞는 동네 찾기', path: '/life_style_district' },
];

const MenuSection = () => {
  return (
    <section className={styles.wrapper}>
      {menus.map((menu) => (
        <Link to={menu.path} key={menu.label} className={styles.link}>
          <MenuItem src={menu.src} label={menu.label} alt={menu.alt} />
        </Link>
      ))}
    </section>
  );
};

export default MenuSection;
