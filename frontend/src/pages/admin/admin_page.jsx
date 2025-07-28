import React from 'react';
import { Title, Text, Paper } from '@mantine/core';
import styles from './admin_page_styles.module.css';

// ИМПОРТИРУЕМ НОВЫЙ КОМПОНЕНТ ДЛЯ УПРАВЛЕНИЯ ПОРТФОЛИО
import { ManagePortfolio } from '../../components/admin_parts/manage_portfolio.jsx';

export const AdminPage = () => {
    return (
        // ИЗМЕНЕНИЕ: Добавляем обертку с такими же стилями, как у других секций
        <section className={styles.admin_section_wrapper}>
            <Title order={2} className={styles.main_title}>
                Admin Panel
            </Title>
            <Text color="dimmed" align="center" mt="sm" mb={50}>
                Here you can manage your website content.
            </Text>

            {/* Блок для управления портфолио */}
            <Paper withBorder radius="md" p="xl" className={styles.content_paper}>
                <Title order={3} className={styles.section_title}>Manage Portfolio</Title>
                <ManagePortfolio />
            </Paper>

            {/* Сюда в будущем можно будет добавить другие блоки управления */}
            {/* 
            <Paper withBorder radius="md" p="xl" mt="xl" className={styles.content_paper}>
                <Title order={3} className={styles.section_title}>Manage Master Info</Title>
                // ... форма для редактирования информации о мастере ...
            </Paper> 
            */}
        </section>
    );
};