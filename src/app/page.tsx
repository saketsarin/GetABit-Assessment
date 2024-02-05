'use client';

import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import NewReleases from '@/components/NewReleases/NewReleases';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />

      <main>
        <HeroSection />
        <NewReleases />
      </main>

      <hr />
      <Footer />
    </div>
  );
};

export default HomePage;
