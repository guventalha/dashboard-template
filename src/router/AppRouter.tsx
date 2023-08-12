import React from 'react';
import Layout from '../layout/Layout';
import { Route, Routes } from 'react-router-dom';
import DashboardHome from '../pages/DashboardHome';
import Teams from '../pages/Teams';
import Projects from '../pages/Projects';
import Calendar from '../pages/Calendar';
import Invoices from '../pages/Invoices';

const AppRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<DashboardHome />} index />
        <Route path="/teams" element={<Teams />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/invoices" element={<Invoices />} />
      </Routes>
    </Layout>
  );
};

export default AppRouter;
