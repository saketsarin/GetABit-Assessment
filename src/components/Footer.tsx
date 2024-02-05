const Footer = () => {
  return (
    <footer className='my-20 py-10 px-40'>
      <div className='flex justify-between'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-3xl font-bold text-[#292D32] transition-opacity duration-300 ease-out cursor-pointer select-none'>
            aBit
          </h1>
          <p
            className='capitalize leading-6 text-left'
            style={{
              fontFamily: 'Reckless Neue',
              fontSize: '20px',
              lineHeight: '24px',
              textAlign: 'left',
            }}
          >
            Changing the way in which <br /> creators and fans interact.
          </p>
        </div>

        <div
          className='flex flex-col gap-2 border-l border-gray-400 py-1 pl-10 justify-around'
          style={{
            fontSize: '14px',
            fontWeight: '700',
            lineHeight: '17px',
            color: '#262626',
          }}
        >
          <h5 className='cursor-pointer select-none'>Home</h5>
          <h5 className='cursor-pointer select-none'>Are you a creator?</h5>
          <h5 className='cursor-pointer select-none'>Support</h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
