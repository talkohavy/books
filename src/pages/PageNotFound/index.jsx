import React from 'react';
import ContactInformationBubble from './ContactInformationBubble';
import Error404Bubble from './Error404Bubble';

export default function PageNotFound() {
  return (
    <div className='box-border flex min-h-mainWindow w-full items-start justify-center overflow-hidden bg-gradient-radial-bottom from-gray-800 to-black p-5'>
      <div className='relative mb-14 box-border flex h-full w-[800px] max-w-full flex-col items-center justify-start gap-5'>
        <Error404Bubble />

        <div className='relative flex w-full max-w-2xl items-center justify-center rounded-2xl bg-transparent'>
          <div className='text-5xl'>💔 💔 💔</div>
        </div>

        <ContactInformationBubble />
      </div>
    </div>
  );
}
