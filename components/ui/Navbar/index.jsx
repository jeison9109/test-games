import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { NavbarLink } from './NavbarLink';
import logo from '../../../public/logoJustPlay.png';

const Navbar = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <>
      {/*<!-- Component: Navbar  --> */}
      {/*<!-- Header --> */}
      <header className='border-b-1 relative z-20 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden'>
        <div className='w-full px-10' style={{ backgroundColor: 'rgba(255, 90, 95)' }}>
          <nav
            aria-label='main navigation'
            className='flex h-[5.5rem] items-stretch justify-between font-medium text-black w-full'
            role='navigation'
          >
            {/*      <!-- Brand logo --> */}
            <div
              className='flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1'
              href='/'
            >
                <Image src={logo} alt="Logo"/>
              
              All Sports
            </div>
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
              ${
                isToggleOpen
                  ? 'visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 '
                  : ''
              }
            `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? 'true' : 'false'}
              aria-label='Toggle navigation'
            >
              <div className='absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform'>
                <span
                  aria-hidden='true'
                  className='absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300'
                ></span>
                <span
                  aria-hidden='true'
                  className='absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300'
                ></span>
                <span
                  aria-hidden='true'
                  className='absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300'
                ></span>
              </div>
            </button>
            {/*      <!-- Navigation links --> */}
            <ul
              role='menubar'
              aria-label='Select page'
              className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? 'visible opacity-100 backdrop-blur-sm'
                  : 'invisible opacity-0'
              }`}
            >
              <NavbarLink href='/home' title='Home' />
              <NavbarLink href='/games' title='Games' />
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};


  export {Navbar};

