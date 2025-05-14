import { ReactNode, useEffect, useRef, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import styles from './bottomSheet.module.scss';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function BottomSheet({ isOpen, onClose, children }: BottomSheetProps) {
  const sheetRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // ESC 키로 닫기
  useEffect(() => {
    if (isOpen) setIsExpanded(false);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose, isOpen]);

  // 드래그 시작 전에 스크롤 중이면 드래그 막기
  const handlePointerDown = () => {
    if (contentRef.current && contentRef.current.scrollTop > 0) {
      setIsDragging(false);
    } else {
      setIsDragging(true);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className={styles.overlay}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className={styles.sheet}
            ref={sheetRef}
            drag="y"
            dragListener={isDragging}
            dragConstraints={{ top: 0, bottom: 0 }}
            onPointerDown={handlePointerDown}
            onDragStart={() => {
              const scrollTop = contentRef.current?.scrollTop ?? 0;
              setIsDragging(scrollTop <= 0); // scroll이 맨 위일 때만 드래그 가능
            }}
            onDragEnd={(e, info) => {
              if (info.offset.y > 100) {
                onClose(); // 아래로 드래그 → 닫힘
              } else if (info.offset.y < -50) {
                setIsExpanded(true); // 위로 드래그 → 확장
              }
              setIsDragging(false);
            }}
            style={{
              height: isExpanded ? '90vh' : '30vh', // ✅ sheet 자체의 높이 조절
            }}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.handle} />
            <div className={styles.content} ref={contentRef}>
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
