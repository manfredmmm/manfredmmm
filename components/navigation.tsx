import React from 'react'
import Link from 'next/link'

type NavigationProps = {
  prev?: string;
  next?: string;
  textColor?: "white" | "black";
}

const Navigation = ({
  prev,
  next,
  textColor = 'black',
}: NavigationProps) => (
  <>
    {prev && (
      <Link legacyBehavior href={prev}>
        <a className={`bg-left-${textColor} fixed top-16 left-0 w-10 lg:w-20 h-full bg-no-repeat bg-center bg-50%`} />
      </Link>
    )}
    {next && (
      <Link legacyBehavior href={next}>
        <a className={`bg-right-${textColor} fixed top-16 right-0 w-10 lg:w-20 h-full bg-no-repeat bg-center bg-50%`} />
      </Link>
    )}
  </>
)


export default Navigation;