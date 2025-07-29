import React, { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, Title, Grid } from '@mantine/core';
import styles from './footer_styles.module.css';

// Оборачиваем компонент в forwardRef
export const FooterComponent = (props, ref) => {
    const { t } = useTranslation();

    return (
        <footer id="contacts" className={styles.footer}>
            <div className={styles.inner}>
                <Grid gutter={50}>
                    <Grid.Col span={{ base: 12, sm: 5 }}>
                        <Title order={3} className={styles.logo}>BEAUTY NAILS</Title>
                        <Text mt="sm" className={styles.tagline}>Your personal space for beauty and relaxation.</Text>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 3 }}>
                        <Title order={4} className={styles.footer_title}>{t('footer_find_us')}</Title>
                        <Text className={styles.footer_text}>
                            Lidl, <br />
                            Škultétyho 3030/1
                        </Text>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 4 }}>
                        <Title order={4} className={styles.footer_title}>{t('footer_book_call')}</Title>
                        <Text className={styles.footer_text}>
                            02/324 418 00
                        </Text>
                    </Grid.Col>
                </Grid>
                <div className={styles.copyright}>
                    © {new Date().getFullYear()} BEAUTY NAILS. All rights reserved.
                </div>
            </div>
        </footer>
    );
};