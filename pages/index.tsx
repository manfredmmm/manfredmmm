import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>manfredmmm - web developer</title>
        <meta name="description" content="I'm manfred miravitllas mas - web developer. I love searching innovative ways on web, looking for a friendly and direct interaction between application and user, all of that with the best image of the site." />
        <meta name="keywords" content="front end developer, web developer, web designer, frontend developer, angularjs developer, javascript developer, web developer barcelona, frontend developer barcelona" />
        <meta property="fb:app_id" content="302184056577324" />
        <meta property="og:title" content="manfredmmm - I do websites" />
        <meta property="og:description" content="I'm manfred miravitllas mas - web developer. I love searching innovative ways on web, looking for a friendly and direct interaction between application and user, all of that with the best image of the site." />
        <meta property="og:site_name" content="manfredmmm" />
        <meta property="og:url" content="http://manfredmmm.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="http://manfredmmm.com/images/manfred-background.png" />
        <meta name="twitter:title" content="manfredmmm - I do websites" />
        <meta name="twitter:description" content="I'm manfred miravitllas mas - web developer. I love searching innovative ways on web, looking for a friendly and direct interaction between application and user, all of that with the best image of the site." />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="manfredmmm" />
        <meta name="twitter:image" content="http://manfredmmm.com/images/manfred-background.png" />
        <meta name="twitter:domain" content="http://manfredmmm.com" />
        <link rel="icon" href="/icons/mmm-favicon.png" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet" />
      </Head>

      <main className="m-2 bg-white">

        <Image 
          layout="fill"
          src="/images/mmm.gif"
          alt="manfredmmm web developer"
          objectFit="cover"
          objectPosition="center"
          className="z-0"
        />

        <div className="container mx-auto z-10">
          <h1>
            <span className="font-bold">Hi!</span>
            <span>I´m manfred miravitllas mas</span>
          </h1>
          <h2>
            web developer
          </h2>

          <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
            <div>
              <div className="text-xl font-medium text-black">ChitChat</div>
              <p className="text-gray-500">You have a new message!</p>
            </div>
          </div>

          <nav>
            <Link href="/about">
              <a>about</a>
            </Link>
            <Link href="/work">
              <a>work</a>
            </Link>
            <Link href="/can">
              <a>can</a>
            </Link>
            <Link href="/contact">
              <a>contact</a>
            </Link>
          </nav>
        </div>

      </main>
    </div>
  )
}

export default Home
