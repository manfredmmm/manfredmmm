import { ReactNode } from 'react'
import Head from 'next/head'
import Header from 'components/header'
import useTranslation from 'next-translate/useTranslation'

type LayoutProps = {
  children: ReactNode;
  title?: string;
  textColor?: string;
  page?: string;
}

const Layout = ({
  children,
  title = 'manfredmmm - web developer',
  textColor = 'black',
  page = '',
}: LayoutProps) => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta 
          name="description" 
          content={t('common:meta.description')}
        />
        <meta 
          name="keywords" 
          content={t('common:meta.keywords')}
        />
        <meta property="fb:app_id" content="302184056577324" />
        <meta property="og:title" content={t('common:meta.title')} />
        <meta 
          property="og:description"
          content={t('common:meta.description')}
        />
        <meta property="og:site_name" content="manfredmmm" />
        <meta property="og:url" content="http://manfredmmm.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="http://manfredmmm.com/images/manfred-web.png" />
        <meta name="twitter:title" content={t('common:meta.title')} />
        <meta 
          name="twitter:description" 
          content={t('common:meta.description')}
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="manfredmmm" />
        <meta name="twitter:image" content="http://manfredmmm.com/images/manfred-web.png" />
        <meta name="twitter:domain" content="http://manfredmmm.com" />
        <link rel="icon" href="/icons/mmm-favicon.png" />
      </Head>
      <Header textColor={textColor}/>
      <main className={`text-grey-darkest ${page === 'can' ? 'min-h-screen lg:h-screen' : 'h-screen' }`}>{children}</main>
    </>
  );
};

export default Layout;