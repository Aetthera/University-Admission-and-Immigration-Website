// src/components/DashboardNav.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const tabs = [
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Applications', path: '/applications' },
  { name: 'Documents', path: '/documents' },
  { name: 'Messages', path: '/messages' },
  { name: 'Profile', path: '/profile' },
];

const DashboardNav = () => {
  return (
    <nav className="border-b border-gray-200 mt-8 mb-6">
      <ul className="flex justify-center space-x-8">
        {tabs.map((tab) => (
          <li key={tab.name}>
            <NavLink
              to={tab.path}
              className={({ isActive }) =>
                `text-lg font-medium pb-2 border-b-2 transition-all duration-200 ${
                  isActive
                    ? 'text-black border-transparent'
                    : 'text-gray-300 border-transparent hover:text-black'
                }`
              }
            >
              {tab.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DashboardNav;