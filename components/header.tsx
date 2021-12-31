import React, { useState } from 'react'
import Link from 'next/link'
import styles from 'components/header.module.css';

const Header = () => {
  const [show, setShow] = useState(false);

  console.log(styles);

  return (
    <header className="flex text-center text-black">
      <a 
        href="#"
        onClick={() => setShow(!show)}
        className={`${show ? styles.active : styles.nav }`}
      >
        <span></span>
      </a>
      <nav className={`${show ? 'flex' : 'hidden'} fixed z-10 justify-center items-center w-screen h-screen bg-white-darkest animate-fade-in-up`}>
        <ul>
          <li>
            <Link href="/">
              <a className="block mb-2">home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="block mb-2">about</a>
            </Link>
          </li>
          <li>
            <Link href="/work">
              <a className="block mb-2">work</a>
            </Link>
          </li>
          <li>
            <Link href="/can">
              <a className="block mb-2">can</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="block mb-2">contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;