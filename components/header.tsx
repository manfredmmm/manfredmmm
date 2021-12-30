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
      <nav className={`${show ? 'flex' : 'hidden'} gspace-x-4`}>
        <Link href="/">
          <a className="mr-2">home</a>
        </Link>
        <Link href="/about">
          <a className="mr-2">about</a>
        </Link>
        <Link href="/work">
          <a className="mr-2">work</a>
        </Link>
        <Link href="/can">
          <a className="mr-2">can</a>
        </Link>
        <Link href="/contact">
          <a className="mr-2">contact</a>
        </Link>
      </nav>
    </header>
  );
}

export default Header;