const ReleaseStat = ({ number, label }: { number: string; label: string }) => {
  return (
    <div className='flex flex-col items-center mr-8'>
      <div className='mt-4 ml-4 border-l border-[#7a7a7a] pl-4 gap-4'>
        <p
          className='font-bold'
          style={{
            fontSize: '16px',
            lineHeight: '26px',
            color: '#565656',
          }}
        >
          {number}
        </p>
        <p
          className='w-2/3'
          style={{
            fontSize: '14px',
            lineHeight: '22px',
            color: '#696969',
          }}
        >
          {label}
        </p>
      </div>
    </div>
  );
};

export default ReleaseStat;
