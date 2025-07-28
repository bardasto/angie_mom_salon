import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
// ИСПРАВЛЕНИЕ: Добавляем 'Text' в эту строку
import { TextInput, Button, Paper, Title, Text } from '@mantine/core';
import styles from './login_page_styles.module.css';

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const auth = getAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/admin'); // Перенаправляем в админку после успеха
        } catch (err) {
            setError('Failed to log in. Check your email and password.');
        }
    };

    return (
        <div className={styles.wrapper}>
            <Paper className={styles.form} radius={0} p={30}>
                <Title order={2} className={styles.title} align="center" mt="md" mb={50}>
                    Admin Login
                </Title>

                <form onSubmit={handleLogin}>
                    <TextInput label="Email" placeholder="hello@gmail.com" size="md" value={email} onChange={(e) => setEmail(e.currentTarget.value)} required />
                    <TextInput label="Password" placeholder="Your password" mt="md" size="md" type="password" value={password} onChange={(e) => setPassword(e.currentTarget.value)} required />
                    
                    {/* Теперь этот компонент <Text> будет работать без ошибок */}
                    {error && <Text color="red" size="sm" mt="sm">{error}</Text>}
                    
                    <Button type="submit" fullWidth mt="xl" size="md">
                        Login
                    </Button>
                </form>
            </Paper>
        </div>
    );
};