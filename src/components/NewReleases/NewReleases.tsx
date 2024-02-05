import React from 'react';
import ReleaseStat from './ReleaseStat';
import { releaseStats } from '@/constant/constant';
import TokensSection from '@/components/NewReleases/TokensSection';

const NewReleasesSection = () => {
  return (
    <div className='my-40 mx-20'>
      <div className='flex justify-between items-end'>
        <div className='flex flex-col gap-3'>
          <h2
            className='text-left font-medium'
            style={{
              fontFamily: 'Reckless Neue',
              fontSize: '28px',
              lineHeight: '34px',
            }}
          >
            Releases
          </h2>
          <p
            className='text-left italic'
            style={{
              fontFamily: 'Reckless Neue',
              fontSize: '16px',
              lineHeight: '22px',
              letterSpacing: '0.03em',
              color: '#565656',
            }}
          >
            Videos that you upload in collaboration with aBit appear here.
          </p>
        </div>

        <div className='flex justify-between items-center'>
          {releaseStats.map((stat, index) => (
            <ReleaseStat key={index} number={stat.number} label={stat.label} />
          ))}
        </div>
      </div>

      <TokensSection />
    </div>
  );
};

export default NewReleasesSection;
