import Link from 'next/link';
import { useRouter } from 'next/router';

const NavbarLink = ({ href, title }) => {
    const router = useRouter();
  
    return (
      <li role='none' className='flex items-stretch'>
        <Link
          role='menuitem'
          aria-haspopup='false'
          className={'flex items-center gap-2 py-4 transition-colors duration-300 focus:outline-none focus-visible:outline-none lg:px-10'}
          href={href}
          
        > 
          <span>{title}</span>
        </Link>
      </li>
    );
  };

  export {NavbarLink};