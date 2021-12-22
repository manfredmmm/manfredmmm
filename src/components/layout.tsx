import { ReactNode } from 'react'
import Head from 'next/head'
import Header from 'src/components/header'

type LayoutProps = {
  children: ReactNode;
  title?: string;
}

const Layout = ({
  children,
  title = 'manfredmmm - web developer',
}: LayoutProps) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta 
        name="description" 
        content="I'm manfred miravitllas mas - web developer. I love searching innovative ways on web, looking for a friendly and direct
         interaction between application and user, all of that with the best image of the site."
      />
      <meta 
        name="keywords" 
        content="front end developer, web developer, web designer, frontend developer, angularjs developer, javascript developer, 
        web developer barcelona, frontend developer barcelona"
      />
      <meta property="fb:app_id" content="302184056577324" />
      <meta property="og:title" content="manfredmmm - I do websites" />
      <meta 
        property="og:description"
        content="I'm manfred miravitllas mas - web developer. I love searching innovative ways on web, looking for a friendly 
        and direct interaction between application and user, all of that with the best image of the site."
      />
      <meta property="og:site_name" content="manfredmmm" />
      <meta property="og:url" content="http://manfredmmm.com" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="http://manfredmmm.com/images/manfred-background.png" />
      <meta name="twitter:title" content="manfredmmm - I do websites" />
      <meta 
        name="twitter:description" 
        content="I'm manfred miravitllas mas - web developer. I love searching innovative ways on web, looking for a friendly and direct 
        interaction between application and user, all of that with the best image of the site."
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="manfredmmm" />
      <meta name="twitter:image" content="http://manfredmmm.com/images/manfred-background.png" />
      <meta name="twitter:domain" content="http://manfredmmm.com" />
      <link rel="icon" href="/icons/mmm-favicon.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Raleway&display=optional"
        rel="stylesheet"
      />
    </Head>
    <Header />
    <main>{children}</main>
  </>
);

export default Layout;