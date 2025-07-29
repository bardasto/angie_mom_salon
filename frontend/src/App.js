import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/auth_context.jsx';
import { LayoutComponent } from './layout/layout_component.jsx';
import { ProtectedRoute } from './router/protected_route.jsx';
import { HomePage } from './pages/home/home_page.jsx';
import { LoginPage } from './pages/login/login_page.jsx';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <LayoutComponent>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <HomePage isAdminPage={true} />
                </ProtectedRoute>
              }
            />
          </Routes>
        </LayoutComponent>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;