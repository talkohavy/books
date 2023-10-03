import React from 'react';

export default function Error404Bubble() {
  return (
    <div className='z-0 mt-7 flex w-full max-w-2xl flex-col items-center justify-between rounded-2xl bg-white bg-opacity-25 p-5 md:flex-row'>
      <div className='w-auto'>
        <div className='font-bold text-gray-100' style={{ WebkitTextStroke: '1px black' }}>
          <h1
            className='font-MyFont-bold mb-7 text-5xl'
            style={{
              background: '-webkit-linear-gradient(90deg, #f85c5c, rgb(238, 116, 136) 50%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Error 404
          </h1>

          <h2 className='text-2xl'>
            Oops...
            <span>&nbsp;🙄</span>
            <br />
            something went wrong
          </h2>
        </div>
      </div>
      <div className='w-auto'></div>
    </div>
  );
}
