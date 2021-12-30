import React from 'react'
import Link from 'next/link'

type NavigationProps = {
  prev: string;
  next: string;
}

const Navigation = ({
  prev,
  next,
}: NavigationProps) => (
  <>
    <Link href={prev}>
      <a 
        href="#"
        className={`${prev === "" ? 'hidden' : 'fixed' } top-10 left-0 w-20 h-full bg-left-black bg-no-repeat bg-center bg-contain`}
      >
        <span className="hidden">left</span>
      </a>
    </Link>
    <Link href={next}>
      <a 
        href="#"
        className={`${next === "" ? 'hidden' : 'fixed' } top-10 right-0 w-20 h-full bg-right-black bg-no-repeat bg-center bg-contain`}
      >
        <span className="hidden">right</span>
      </a>
    </Link>
  </>
);

export default Navigation;