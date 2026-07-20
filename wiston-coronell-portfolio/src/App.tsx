import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <main className="mx-auto max-w-[1200px] px-5 md:px-16 py-24 text-center">
                <h1 className="text-[32px] font-bold mb-3">Page Not Found</h1>
                <p className="text-on-surface-variant mb-6">
                  The page you're looking for doesn't exist.
                </p>
                <a
                  href="/"
                  className="bg-primary text-on-primary px-6 py-3 rounded-lg font-label-md inline-flex items-center gap-2 hover:opacity-90 transition-all"
                >
                  Back to Home
                </a>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}