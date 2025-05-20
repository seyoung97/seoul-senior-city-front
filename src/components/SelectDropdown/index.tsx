import { useEffect, useRef, useState } from 'react';

import styles from './selectDropdown.module.scss';

export interface SelectOption {
  value: string;
  label: string;
  mode: string;
  category?: string;
}

interface SelectDropdownProps {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SelectDropdown({ options, value, onChange, placeholder = '선택하세요' }: SelectDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdwonRef = useRef<HTMLDivElement>(null);

  const selected = options.find((opt) => opt.value === value);

  const handelSelect = (val: string) => {
    onChange(val);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdwonRef.current && !dropdwonRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.wrapper} ref={dropdwonRef}>
      <button className={styles.button} onClick={() => setIsOpen((prev) => !prev)}>
        {selected ? selected.label : placeholder}
        <span className={styles.chevron}>▾</span>
      </button>
      {isOpen && (
        <ul className={styles.menu}>
          {options.map((opt) => (
            <li
              key={opt.value}
              className={`${styles.option} ${opt.value === value ? styles.selected : ''}`}
              onClick={() => handelSelect(opt.value)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
