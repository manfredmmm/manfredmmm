import { ReactNode } from 'react'
import Head from 'next/head'
import Header from 'components/header'
import useTranslation from 'next-translate/useTranslation'
import Script from 'next/script'

type LayoutProps = {
  children: ReactNode;
  title?: string;
  textColor?: string;
  page?: string;
}

const Layout = ({
  children,
  title = 'manfredmmm - I do websites',
  textColor = 'black',
  page = '',
}: LayoutProps) => {
  const { t } = useTranslation();
  
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>{title}</title>
        <meta
          name="title"
          content={t('common:meta.title')}
        />
        <meta 
          name="description" 
          content={t('common:meta.description')}
        />
        <meta 
          name="keywords" 
          content={t('common:meta.keywords')}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://manfredmmm.com" />
        <meta property="og:title" content={t('common:meta.title')} />
        <meta 
          property="og:description"
          content={t('common:meta.description')}
        />
        <meta property="og:image" content="https://manfredmmm.com/images/manfredmmm-web.png" />
        <meta property="og:site_name" content="manfredmmm" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://manfredmmm.com" />
        <meta name="twitter:title" content={t('common:meta.title')} />
        <meta 
          name="twitter:description" 
          content={t('common:meta.description')}
        />
        <meta name="twitter:image" content="https://manfredmmm.com/images/manfredmmm-web.png" />
        <link rel="icon" href="/icons/mmm-favicon.png" />
      </Head>
      <Header textColor={textColor}/>
      <main className={`text-grey-darkest ${page === 'can' ? 'min-h-screen lg:h-screen' : 'h-screen' }`}>{children}</main>
      <footer>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}
        />
        <Script
          id="settingGA"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </footer>
    </>
  );
};

export default Layout;