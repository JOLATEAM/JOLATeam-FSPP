import React from 'react';
import { HiOutlineLightBulb } from '@react-icons/all-files/hi/HiOutlineLightBulb';

import { BsSkipForwardFill } from '@react-icons/all-files/bs/BsSkipForwardFill';

export default function Buttons() {
  return (
    <div>
      <div className='grid grid-cols-2 grid-flow-row auto-rows-max'>
        <div className='py-6 bg-smaksalmon border-0  items-center text-center hover:bg-smakHighlight'>
          <div className='flex-row'>
            <a href='/survey'>
              {' '}
              <HiOutlineLightBulb className='w-full h-20 my-2 fill-white hover:fill-smakorange' />
              <h4 className='my-4 text-3xl text-white text-center font-extrabold font-[Fraunces]'>
                Take Our
                <br />
                Quiz
              </h4>
            </a>
          </div>
        </div>
        <div className='py-6  bg-smaksalmon border-0  items-center text-center hover:bg-smakorange'>
          <div className='flex-row'>
            <a href='/login'>
              <BsSkipForwardFill className='w-full h-20 my-2 fill-white hover:fill-smakHighlight' />
              <h4 className='my-4 text-3xl text-white text-center font-extrabold font-[Fraunces]'>
                SKIP
              </h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
