import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Group, Button, Burger, Drawer, Stack, Title, CloseButton, Divider } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { useAuth } from '../../context/auth_context.jsx';
import styles from './header_styles.module.css';

// Компонент переключателя языков
const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const changeLanguage = (lng) => i18n.changeLanguage(lng);

    return (
        <Group spacing="xs" grow>
            <button onClick={() => changeLanguage('en')} className={styles.lang_button}>EN</button>
            <button onClick={() => changeLanguage('uk')} className={styles.lang_button}>UA</button>
            <button onClick={() => changeLanguage('sk')} className={styles.lang_button}>SK</button>
        </Group>
    );
};

// Компонент больше не принимает пропсы для скролла
export const HeaderComponent = () => {
  const { t } = useTranslation();
  const { isAdmin } = useAuth();
  const navigate = useNavigate();
  const [drawerOpened, setDrawerOpened] = useState(false);
  const isMobile = useMediaQuery('(max-width: 992px)');

  const handleLogout = () => {
      const auth = getAuth();
      signOut(auth).then(() => navigate('/'));
  };

  return (
    <header className={styles.header}>
        <div className={styles.inner}>
            <div className={styles.logo} onClick={() => navigate('/')} style={{cursor: 'pointer'}}>
                BEAUTY NAILS
            </div>
            
            {!isMobile && (
                <div className={styles.nav_wrapper}>
                    {/* ИСПОЛЬЗУЕМ ТЕГ <a> С href ДЛЯ ЯКОРНЫХ ССЫЛОК */}
                    <a href="#services" className={styles.nav_link}>{t('nav_services')}</a>
                    <a href="#portfolio" className={styles.nav_link}>{t('portfolio_title')}</a>
                    <a href="#master" className={styles.nav_link}>{t('master_title')}</a>
                    <a href="#contacts" className={styles.nav_link}>{t('nav_contacts')}</a>
                    <LanguageSwitcher />
                    {isAdmin && <Button variant="outline" color="red" onClick={handleLogout} size="xs">Logout</Button>}
                    <Button className={styles.header_cta_button}>{t('nav_book')}</Button>
                </div>
            )}

            {isMobile && (
                <Burger opened={drawerOpened} onClick={() => setDrawerOpened(true)} color="#1a1a1a" />
            )}
        </div>

        <Drawer
            opened={drawerOpened}
            onClose={() => setDrawerOpened(false)}
            position="right"
            withCloseButton={false}
            size="90%"
            overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
            classNames={{ body: styles.drawer_body }}
        >
            <div className={styles.drawer_header}>
                <Title order={3}>Menu</Title>
                <CloseButton onClick={() => setDrawerOpened(false)} size="lg" iconSize={24} />
            </div>
            
            <div className={styles.drawer_content}>
                <Stack gap="xl">
                    {/* ИСПОЛЬЗУЕМ ТЕГ <a> И ЗАКРЫВАЕМ МЕНЮ ПО КЛИКУ */}
                    <a href="#services" className={styles.mobile_nav_link} onClick={() => setDrawerOpened(false)}>{t('nav_services')}</a>
                    <a href="#portfolio" className={styles.mobile_nav_link} onClick={() => setDrawerOpened(false)}>{t('portfolio_title')}</a>
                    <a href="#master" className={styles.mobile_nav_link} onClick={() => setDrawerOpened(false)}>{t('master_title')}</a>
                    <a href="#contacts" className={styles.mobile_nav_link} onClick={() => setDrawerOpened(false)}>{t('nav_contacts')}</a>
                </Stack>

                <div className={styles.drawer_footer}>
                    <LanguageSwitcher />
                    <Button className={styles.header_cta_button} fullWidth size="lg" mt="md">
                        {t('nav_book')}
                    </Button>
                    {isAdmin && (
                        <Button variant="outline" color="red" onClick={handleLogout} fullWidth mt="sm">
                            Logout
                        </Button>
                    )}
                </div>
            </div>
        </Drawer>
    </header>
  );
};