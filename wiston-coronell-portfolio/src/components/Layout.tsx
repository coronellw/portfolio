import { Link, NavLink, Outlet, type NavLinkRenderProps } from 'react-router-dom';
import { personalInfo } from '../data/portfolio';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

export default function Layout() {
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
          >
            <span className="material-symbols-outlined text-primary" aria-hidden="true">
              terminal
            </span>
            <span className="text-headline-md font-bold text-primary">
              Wiston Coronell
            </span>
          </Link>

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
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-on-surface-variant"
            aria-label="Open navigation menu"
            type="button"
          >
            <span className="material-symbols-outlined" aria-hidden="true">menu</span>
          </button>
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