import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import MetaUpdater from './components/MetaUpdater';

import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import CommercialPage from './pages/CommercialPage';
import PlaygroundPage from './pages/PlaygroundPage';
import ExperimentsPage from './pages/ExperimentsPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

/* --- ROOT APP --- */
export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <MetaUpdater />
        <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white flex flex-col">
          <CustomCursor />
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/project/:slug" element={<ProjectDetailPage />} />
              <Route path="/commercial" element={<CommercialPage />} />
              <Route path="/commercial-nda" element={<CommercialPage />} />
              <Route path="/playground" element={<PlaygroundPage />} />
              <Route path="/personal" element={<PlaygroundPage />} />
              <Route path="/experiments" element={<ExperimentsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
          <ScrollToTopButton />
        </div>
      </Router>
    </ErrorBoundary>
  );
}
