import React, { useState } from 'react'
import Link from 'next/link'

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <header className="flex text-center">
      <div className="absolute top-2 right-2 text-black">
        <a 
          href="#"
          onClick={() => setShow(!show)}
        >
          burger icon
        </a>
      </div>
      <nav className={`gspace-x-4 ${show ? 'flex' : 'hidden'}`}>
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