import React, { useState } from 'react'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import styles from 'components/header.module.css';

type HeaderProps = {
  textColor?: string;
}

const Header = ({
  textColor = 'black',
}: HeaderProps) => {
  const [show, setShow] = useState(false);
  const { t } = useTranslation();
  return (
    <header className="flex text-center text-black">
      <Link href="/">
        <a className="block fixed top-4 left-5 w-7 h-7">
          <span className={`${textColor === 'white' ? 'bg-mmm-icon-white' : 'bg-mmm-icon-black' } block bg-no-repeat bg-contain bg-center	h-full`}></span>
        </a>
      </Link>
      <a 
        href="#"
        onClick={() => setShow(!show)}
        className={`${show ? styles.nav_active : styles.nav }`}
      >
        <span className={`${textColor === 'white' ? 'bg-white-darkest after:bg-white-darkest before:bg-white-darkest' : 'bg-gray-darkest after:bg-gray-darkest before:bg-gray-darkest'} after:top-2 before:bottom-2`}></span>
      </a>
      <div className={`${show ? styles.menu_active : styles.menu} fixed z-10 top-0 left-0 w-screen h-screen bg-white-darkest`}>
        <nav className="w-full h-full flex justify-center items-center">
          <ul>
            <li>
              <Link href="/">
                <a className="block mb-2">
                  <span className="text-xl uppercase mb-6 font-heading">{t('common:home')}</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="block mb-2">
                  <span className="text-xl uppercase mb-6 font-heading">{t('common:about')}</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/work">
                <a className="block mb-2">
                  <span className="text-xl uppercase mb-6 font-heading">{t('common:work')}</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/can">
                <a className="block mb-2">
                  <span className="text-xl uppercase mb-6 font-heading">{t('common:can')}</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className="block mb-2">
                  <span className="text-xl uppercase mb-6 font-heading">{t('common:contact')}</span>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;