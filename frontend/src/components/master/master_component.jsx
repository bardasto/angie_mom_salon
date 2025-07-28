import React from 'react';
import { useTranslation } from 'react-i18next';
import { Title, Text } from '@mantine/core'; // Убрали Grid
import { FadeInOnScroll } from '../animation/fade_in_on_scroll.jsx';
import styles from './master_styles.module.css';

export const MasterComponent = () => {
    const { t } = useTranslation();

    return(
        <section className={styles.master_section}>
            <FadeInOnScroll>
                {/* 
                  ИЗМЕНЕНИЕ: Используем простую обертку вместо Grid 
                  для создания вертикального и центрированного макета.
                */}
                <div className={styles.content_wrapper}>
                    <img 
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500" // Замените на фото Ksenia Harbuzova
                        alt={t('master_name')}
                        className={styles.master_image}
                    />
                    
                    {/* Обертка для текста, чтобы ограничить его ширину */}
                    <div className={styles.text_block}>
                        <Text className={styles.section_title}>{t('master_title')}</Text>
                        <Title order={2} className={styles.master_name}>{t('master_name')}</Title>
                        <Text className={styles.master_description}>{t('master_description')}</Text>
                    </div>
                </div>
            </FadeInOnScroll>
        </section>
    );
};