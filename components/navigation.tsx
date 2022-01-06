import React from 'react'
import Link from 'next/link'

type NavigationProps = {
  prev: string;
  next: string;
  textColor?: string;
}

const Navigation = ({
  prev,
  next,
  textColor = 'black',
}: NavigationProps) => (
  <>
    <Link href={prev}>
      <a 
        href="#"
        className={`${prev === "" ? 'hidden' : 'fixed'} ${textColor === "white" ? 'bg-left-white' : 'bg-left-black'} top-16 left-0 w-20 h-full bg-no-repeat bg-center bg-50%`}
      >
        <span className="hidden">left</span>
      </a>
    </Link>
    <Link href={next}>
      <a 
        href="#"
        className={`${next === "" ? 'hidden' : 'fixed'} ${textColor === "white" ? 'bg-right-white' : 'bg-right-black'} top-16 right-0 w-20 h-full bg-no-repeat bg-center bg-50%`}
      >
        <span className="hidden">right</span>
      </a>
    </Link>
  </>
);

export default Navigation;