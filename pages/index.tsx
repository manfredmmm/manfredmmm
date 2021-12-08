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

      <main className="p-2 bg-white h-screen">
        <div className="bg-mmm-home bg-no-repeat bg-center bg-cover h-full flex justify-center items-center">
            <div className="text-white">
              <h1 className="text-center">
                <span className="mr-1 text-3xl">Hi!</span>
                <span>I'm manfred miravitllas mas</span>
              </h1>
              <h2 className="text-center">
                web developer
              </h2>
              <div className="flex text-center">
                <nav className="flex space-x-4">
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
            </div>
        </div>
      </main>
    </div>
  )
}

export default Home
