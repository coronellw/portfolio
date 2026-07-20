import { useState } from 'react';
import { Link, NavLink, Outlet, type NavLinkRenderProps } from 'react-router-dom';
import { personalInfo } from '../data/portfolio';
import { useTheme } from '../context/ThemeContext';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  function closeMobileMenu() {
    setMobileMenuOpen(false);
  }

  return (
    <>
      {/* Skip link for keyboard users */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Top Navigation */}
      <header
        role="banner"
        className="bg-surface fixed top-0 w-full z-50 border-b border-outline-variant"
      >
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 md:px-16">
          <Link
            to="/"
            className="flex items-center gap-2 cursor-pointer active:opacity-80"
            aria-label="Wiston Coronell - Home"
            onClick={closeMobileMenu}
          >
            <span className="material-symbols-outlined text-primary" aria-hidden="true">
              terminal
            </span>
            <span className="text-headline-md font-bold text-primary">
              Wiston Coronell
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }: NavLinkRenderProps) =>
                  `font-label-md text-label-md transition-colors cursor-pointer active:opacity-80 ${
                    isActive
                      ? 'text-primary border-b-2 border-primary pb-1'
                      : 'text-on-surface-variant hover:text-primary'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label-md hover:opacity-90 transition-all active:scale-95"
              aria-label="View Wiston Coronell's LinkedIn profile"
            >
              Resume
            </a>
            {/* Theme toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <span className="material-symbols-outlined" aria-hidden="true">
                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
          </nav>

          {/* Mobile hamburger button */}
          <button
            className="md:hidden p-2 text-on-surface-variant rounded-lg hover:bg-surface-container transition-colors"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            <span className="material-symbols-outlined" aria-hidden="true">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile drawer overlay */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/20 md:hidden"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
        )}

        {/* Mobile drawer panel */}
        <div
          className={`fixed top-16 right-0 z-50 h-[calc(100vh-4rem)] w-72 bg-surface border-l border-outline-variant shadow-xl transform transition-transform duration-300 ease-in-out md:hidden ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <nav className="flex flex-col p-6 gap-2" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={closeMobileMenu}
                className={({ isActive }: NavLinkRenderProps) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg font-label-md text-label-md transition-colors ${
                    isActive
                      ? 'text-primary bg-primary-container/10 font-semibold'
                      : 'text-on-surface-variant hover:bg-surface-container hover:text-primary'
                  }`
                }
              >
                <span className="material-symbols-outlined text-xl" aria-hidden="true">
                  {item.to === '/' ? 'home' : item.to === '/projects' ? 'grid_view' : 'mail'}
                </span>
                {item.label}
              </NavLink>
            ))}
            {/* Theme toggle in mobile drawer */}
            <button
              type="button"
              onClick={() => {
                toggleTheme();
                closeMobileMenu();
              }}
              className="flex items-center gap-3 px-4 py-3 rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <span className="material-symbols-outlined text-xl" aria-hidden="true">
                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
              </span>
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
            <hr className="my-4 border-outline-variant" />
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-lg font-label-md text-label-md bg-primary text-on-primary hover:opacity-90 transition-all"
              aria-label="View Wiston Coronell's LinkedIn profile"
              onClick={closeMobileMenu}
            >
              <span className="material-symbols-outlined text-xl" aria-hidden="true">
                open_in_new
              </span>
              Resume
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors"
              aria-label="GitHub profile"
              onClick={closeMobileMenu}
            >
              <span className="material-symbols-outlined text-xl" aria-hidden="true">
                code
              </span>
              GitHub
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-3 px-4 py-3 rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors"
              aria-label="Send email"
              onClick={closeMobileMenu}
            >
              <span className="material-symbols-outlined text-xl" aria-hidden="true">
                mail
              </span>
              Email
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content" className="min-h-screen pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer
        role="contentinfo"
        className="w-full border-t border-outline-variant bg-surface-container-low"
      >
        <div className="mx-auto max-w-[1200px] px-5 md:px-16 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary" aria-hidden="true">
              terminal
            </span>
            <span className="text-headline-md text-primary font-bold">
              {personalInfo.name}
            </span>
          </div>
          <p className="font-label-md text-label-md text-on-surface-variant">
            &copy; {new Date().getFullYear()} Built with Precision
          </p>
          <div className="flex gap-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary underline transition-all"
              aria-label="GitHub profile"
            >
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary underline transition-all"
              aria-label="LinkedIn profile"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary underline transition-all"
              aria-label="Send email"
            >
              Email
            </a>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Navigation */}
      <nav
        className="fixed bottom-0 w-full z-50 md:hidden bg-surface border-t border-outline-variant"
        aria-label="Mobile navigation"
      >
        <div className="flex justify-around items-center py-2 px-5">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={closeMobileMenu}
              className={({ isActive }: NavLinkRenderProps) =>
                `flex flex-col items-center justify-center transition-transform duration-200 active:scale-95 ${
                  isActive
                    ? 'text-primary font-bold'
                    : 'text-on-surface-variant'
                }`
              }
              aria-label={item.label}
            >
              <span className="material-symbols-outlined" aria-hidden="true">
                {item.to === '/' ? 'home' : item.to === '/projects' ? 'grid_view' : 'mail'}
              </span>
              <span className="font-label-md text-[10px]">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
}