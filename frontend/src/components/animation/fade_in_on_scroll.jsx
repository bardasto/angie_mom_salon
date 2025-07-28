import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './fade_in_styles.module.css';

export const FadeInOnScroll = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Анимация сработает только один раз
    threshold: 0.1,    // Сработает, когда 10% компонента видно
  });

  return (
    <div ref={ref} className={`${styles.fade_in_section} ${inView ? styles.is_visible : ''}`}>
      {children}
    </div>
  );
};