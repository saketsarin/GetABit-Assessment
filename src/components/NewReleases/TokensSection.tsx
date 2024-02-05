import { tokenStats } from '@/constant/constant';
import React from 'react';

const TokensSection = () => {
  return (
    <div className='mt-20'>
      <div className='grid grid-cols-4'>
        {/* Add Card Button */}
        <div className='relative flex flex-col items-center justify-center p-4 rounded-3xl text-center h-72 w-64 bg-[#EDEDED] cursor-pointer select-none'>
          <img src='/svg/plus.svg' alt='Add' className='w-7 h-7' />
          <p
            className='absolute bottom-6 w-9/12'
            style={{
              fontSize: '14px',
              color: '#A0A0A0',
            }}
          >
            You haven't uploaded any videos with aBit yet. Add now!
          </p>
        </div>

        {/* Normal Token Card */}
        <div className='relative rounded-3xl overflow-hidden h-72 w-64 bg-cover bg-center cursor-pointer'>
          <img
            src='/images/NewReleases/Tokens/token1_bg.png'
            alt='Token 1'
            className='w-full h-full object-cover boxShadow-custom'
          />
          <h3
            className='text-lg font-medium text-white absolute top-4 left-4 text-white'
            style={{
              fontSize: '18px',
              lineHeight: '24.2px',
            }}
          >
            The Sound of Silence
          </h3>

          <div className='absolute bottom-0 left-0 right-0 flex justify-between items-center bg-white/20 backdrop-blur-lg m-4 py-2 px-4 rounded-xl'>
            {tokenStats.map((pair) => (
              <div
                key={pair.label}
                className='flex flex-col gap-1 items-center text-white'
                style={{
                  fontSize: '12px',
                  lineHeight: '14.52px',
                  fontFamily: 'DM Sans',
                }}
              >
                <p>{pair.label}</p>
                <p
                  className='font-bold'
                  style={{
                    fontSize: '14px',
                    lineHeight: '18.23px',
                  }}
                >
                  {pair.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokensSection;
