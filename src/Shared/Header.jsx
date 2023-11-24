import { useEffect, useState } from 'react';
import { themeChange } from 'theme-change';
import ThemeToggle from '../Components/ThemeToggle';
import Menu from './Menu';
import AccessButtons from '../Components/AccessButtons';
import logo from '../assets/dwellify-logo.svg';
import logoWhite from '../assets/dwellify-logo-white.svg';

const Header = () => {
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDark')) || false);
  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <header className="drawer drawer-end bg-base-200">
      <input
        id="nav-drawer"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content flex flex-col max-w-1440 mx-auto w-full">
        {/* Navbar */}
        <div className="w-full navbar">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="nav-drawer"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">
            <img
              src={isDark ? logoWhite : logo}
              alt={'Dwellify'}
              className="h-12"
            />
          </div>

          <div className="flex-none hidden md:block">
            <ul className="menu menu-horizontal text-base items-center">
              <Menu />
            </ul>
          </div>
          <ThemeToggle
            isDark={isDark}
            setIsDark={setIsDark}
          />
          <AccessButtons />
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="nav-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base">
          <Menu />
        </ul>
      </div>
    </header>
  );
};

export default Header;
