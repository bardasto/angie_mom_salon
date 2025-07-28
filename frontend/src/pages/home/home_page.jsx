import React from 'react';
import { HeroComponent } from '../../components/hero/hero_component.jsx';
import { PortfolioComponent } from '../../components/portfolio/portfolio_component.jsx';
import { MasterComponent } from '../../components/master/master_component.jsx';

// Принимаем пропс isAdminPage
export const HomePage = ({ isAdminPage = false }) => {
  return (
    <>
      {/* Передаем пропс дальше в дочерние компоненты */}
      <HeroComponent isAdminPage={isAdminPage} />
      <PortfolioComponent isAdminPage={isAdminPage} />
      <MasterComponent isAdminPage={isAdminPage} />
    </>
  );
};