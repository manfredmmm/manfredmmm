import type { NextPage } from 'next'
import Image from 'next/image'
import errorPic from '../public/images/404.svg'


const c404: NextPage = () => {
  return (
    <div className="bg-white-darkest h-screen flex flex-row justify-center items-center ">
      <Image
        src={errorPic}
        alt="400"
        className=""
      />
    </div>
  );
}

export default c404;