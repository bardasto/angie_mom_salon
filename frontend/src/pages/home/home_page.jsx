import React from 'react';
import { HeroComponent } from '../../components/hero/hero_component.jsx';
import { PortfolioComponent } from '../../components/portfolio/portfolio_component.jsx';
import { MasterComponent } from '../../components/master/master_component.jsx';

// БОЛЬШЕ НИКАКИХ forwardRef И ПРОПСОВ С ССЫЛКАМИ.
export const HomePage = ({ isAdminPage = false }) => {
  return (
    <>
      <HeroComponent isAdminPage={isAdminPage} />
      <PortfolioComponent isAdminPage={isAdminPage} />
      <MasterComponent isAdminPage={isAdminPage} />
    </>
  );
};