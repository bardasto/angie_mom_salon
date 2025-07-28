import React from 'react';
import { useTranslation } from 'react-i18next';
import { Title, Text, Button } from '@mantine/core';
import { FadeInOnScroll } from '../animation/fade_in_on_scroll.jsx';
import styles from './hero_styles.module.css';

export const HeroComponent = () => {
  const { t } = useTranslation();

  return (
    // Убираем Mantine <Container>, так как у нас теперь своя глобальная обертка
    <div className={styles.hero}>
      <FadeInOnScroll>
        <div className={styles.content_wrapper}>
          <Title order={1} className={styles.title}>
            {t('hero_title')}
          </Title>
          <Text className={styles.description}>
            {t('hero_subtitle')}
          </Text>
          <Button className={styles.cta_button}>
            {t('hero_cta')}
          </Button>
        </div>
      </FadeInOnScroll>
    </div>
  );
};