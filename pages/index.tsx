import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

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

      <main className="p-2 bg-white-dark h-screen">
        <div className="bg-mmm-home bg-no-repeat bg-center bg-cover h-full flex justify-center items-center">
            <div className="text-white-dark animate-fade-in">
              <svg className="mb-12 stroke-current text-white-dark" width="200px" height="125px" viewBox="0 0 688 438">
                <path strokeWidth="8" strokeMiterlimit="10" d="M39.899,388.684L242.796,39.625,M242.899,39.684L445.49,389.199,M343.646,213.5L445.979,39.625,M445.979,39.625L647.205,389.2,M647.205,389.199c-1.194,0-607.307,0.031-607.307,0.031,M35.149,179.059h618.332"></path>
              </svg>
              <h1 className="text-center mb-2">
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
