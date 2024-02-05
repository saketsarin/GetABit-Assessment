'use client';

import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);
  const [currentRole, setcurrentRole] = useState('Creator');

  const toggleRole = (role: string) => {
    setcurrentRole(role);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='overflow-hidden'>
      <div
        className='relative bg-no-repeat bg-cover bg-center -mt-12'
        style={{
          backgroundImage: "url('/images/cover image.png')",
          height: '70vh',
          transform: `translateY(${offsetY * 0.5}px)`,
        }}
      >
        <div className='absolute inset-0 bg-black bg-opacity-30'></div>
      </div>

      <div className='relative bg-[#292828] py-6 overflow-visible'>
        <div
          className='animate-marquee whitespace-nowrap'
          style={{
            fontFamily: 'Gloria Hallelujah',
            fontSize: '24px',
            animation: 'marquee 15s linear infinite',
            background: `
              linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
              linear-gradient(0deg, #FFFFFF, #FFFFFF)
            `,
            width: 'fit-content',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          John Bill / Creator / Moved to NYC / 27.11.22 / Live now/John Bill /
          Creator / Moved to NYC / 27.11.22 / Live now / John Bill / Creator /
          Moved to NYC / 27.11.22 / Live now
        </div>
      </div>

      <div
        className='absolute -mt-40 left-10 ml-10 h-60 bg-cover rounded-3xl shadow-lg flex'
        style={{
          backgroundImage: "url('/images/ProfileCard/profile bg.png')",
          boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)',
        }}
      >
        <div
          className='w-1/2 h-full bg-cover border-r-2 border-black rounded-l-3xl'
          style={{
            backgroundImage: "url('/images/ProfileCard/profile picture.jpeg')",
            minWidth: '40px',
          }}
        ></div>

        <div
          className='w-1/2 flex flex-col justify-center ml-4 p-4 mr-8'
          style={{ minWidth: '280px' }}
        >
          <div className='flex items-center gap-9'>
            <h3
              className='text-xl font-bold uppercase font-bold text-left text-black'
              style={{
                fontSize: '24px',
                letterSpacing: '0.015em',
                lineHeight: '29px',
                whiteSpace: 'nowrap',
              }}
            >
              Dan Mace
            </h3>
            <p
              className='text-left'
              style={{
                fontSize: '14px',
                lineHeight: '22px',
                color: '#696969',
              }}
            >
              /Johny_Films/
            </p>
          </div>
          <p
            className='mt-4 font-bold text-left'
            style={{
              fontSize: '14px',
              lineHeight: '22px',
              color: '#696969',
            }}
          >
            Bio
          </p>
          <p
            className='text-sm text-left'
            style={{
              fontSize: '14px',
              lineHeight: '22px',
              color: '#696969',
            }}
          >
            Simply a film fan creating original content for YouTube. Let's
            Collaborate.
          </p>
          <div className='mt-6 w-full max-w-xs mx-auto bg-[#535253] rounded overflow-hidden shadow relative flex select-none'>
            {['Creator', 'User'].map((role) => (
              <button
                key={role}
                className={`flex-1 font-medium py-0.5 cursor-default ${
                  currentRole === role
                    ? 'text-gray-800 border border-black rounded bg-[#E6E7E6]'
                    : 'bg-transparent text-transparent'
                }`}
                style={{
                  fontSize: '14px',
                }}
              >
                {role}
              </button>
            ))}
            <div
              className={`absolute top-0 transition-all ease-in-out duration-500 cursor-pointer ${
                currentRole === 'User' ? 'translate-x-0' : 'translate-x-full'
              } bg-[#535253] w-1/2 h-full`}
              onClick={() =>
                toggleRole(currentRole === 'User' ? 'Creator' : 'User')
              }
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
