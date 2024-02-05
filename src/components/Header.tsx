'use client';

import React, { useState, useEffect, useRef } from 'react';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside: EventListener = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <header
      className='flex justify-between items-center px-12 py-5 border-b-2 border-black sticky top-0 z-50 bg-cover bg-center'
      style={{
        backgroundImage: 'url(/images/Header/header-bg.png)',
      }}
    >
      <h1 className='text-2xl font-bold ml-20 text-[#292D32] transition-opacity duration-300 ease-out cursor-pointer select-none'>
        aBit
      </h1>
      <div className='flex items-center gap-2'>
        <button
          aria-label='Share'
          className='inline-flex items-center gap-2 px-5 py-2 border-2 border-[#764CC2] rounded-full text-[#764CC2] font-bold text-sm hover:bg-[#764CC2] hover:text-white focus:outline-none transition-colors duration-500 ease-in-out select-none'
        >
          Share new video
        </button>
        <button
          aria-label='Wallet'
          className='p-2 rounded-md hover:bg-gray-100 focus:outline-none select-none'
        >
          <img
            src='/images/Header/icons8-wallet-50.png'
            alt='Wallet'
            className='w-6 h-6'
          />
        </button>
        <button
          aria-label='Notifications'
          className='p-2 rounded-md hover:bg-gray-100 focus:outline-none select-none'
        >
          <img
            src='/images/Header/icons8-notification-96.png'
            alt='Notifications'
            className='w-7 h-8'
          />
        </button>
        <div className='relative' ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className='flex items-center gap-1 select-none outline-none'
            aria-label='Profile'
          >
            <img
              src='/images/Header/Profile pic.png'
              alt='Profile'
              className='w-12 h-12 p-2 rounded-md'
            />
            <img
              src='/images/Header/icons8-expand-arrow-24.png'
              alt='Arrow Down'
              className='w-5 h-5'
            />
          </button>

          {isDropdownOpen && (
            <div className='absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50'>
              <ul className='py-2'>
                <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                  Wow
                </li>
                <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                  So
                </li>
                <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                  Cool
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
