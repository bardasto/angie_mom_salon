import React from 'react';
import { getAuth } from 'firebase/auth';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
    const auth = getAuth();
    // Если пользователя нет (не залогинен), перенаправляем на страницу входа
    if (!auth.currentUser) {
        return <Navigate to="/login" />;
    }
    // Если залогинен, показываем дочерний компонент (Админ-панель)
    return children;
};