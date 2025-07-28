import React from 'react';
import { useTranslation } from 'react-i18next';
import { Group, Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { useAuth } from '../../context/auth_context.jsx';
import styles from './header_styles.module.css';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const changeLanguage = (lng) => i18n.changeLanguage(lng);

    return (
        <Group spacing="xs">
            <button onClick={() => changeLanguage('en')} className={styles.lang_button}>EN</button>
            <button onClick={() => changeLanguage('uk')} className={styles.lang_button}>UA</button>
            <button onClick={() => changeLanguage('sk')} className={styles.lang_button}>SK</button>
        </Group>
    );
};

export const HeaderComponent = () => {
  const { t } = useTranslation();
  const { isAdmin } = useAuth();
  const navigate = useNavigate();

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
            
            <div className={styles.nav_wrapper}>
                <button className={styles.nav_link}>{t('nav_services')}</button>
                <button className={styles.nav_link}>{t('nav_contacts')}</button>
                <LanguageSwitcher />
                
                {/* Если пользователь админ, показываем кнопку Выйти */}
                {isAdmin && (
                    <Button variant="outline" color="red" onClick={handleLogout} size="xs">
                        Logout
                    </Button>
                )}

                <Button className={styles.header_cta_button}>
                    {t('nav_book')}
                </Button>
            </div>
        </div>
    </header>
  );
};