import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home';
import ProjectsPage from '../pages/ProjectsPage';
import WorkspacePage from '../pages/WorkspacePage';
import CommunityPage from '../pages/CommunityPage';
import MarketplacePage from '../pages/MarketplacePage';
import ProfilePage from '../pages/ProfilePage';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import { AuthContext } from '../context/AuthContext';

const Protected = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (!user) return <Navigate to="/login" replace />;
  return children;
};

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/workspace" element={<Protected><WorkspacePage /></Protected>} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/marketplace" element={<MarketplacePage />} />
        <Route path="/profile" element={<Protected><ProfilePage /></Protected>} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}