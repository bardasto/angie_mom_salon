import React from 'react';
import styles from './layout_styles.module.css';
import { HeaderComponent } from '../components/header/header_component.jsx';
import { FooterComponent } from '../components/footer/footer_component.jsx';

export const LayoutComponent = ({ children }) => {
  return (
    <div className={styles.app_wrapper}>
      <HeaderComponent />
      <main className={styles.main_content_wrapper}>
        {children}
      </main>
      <FooterComponent />
    </div>
  );
};