import type { NextPage } from 'next'
import Layout from 'components/layout'
import Navigation from 'components/navigation'
import useTranslation from 'next-translate/useTranslation'

const About: NextPage = () => {
  const { t } = useTranslation();
  return (
    <Layout title={`manfredmmm - ${t('common:about').toLowerCase()}`}>
      <div className="bg-white-darkest h-full flex flex-row justify-center items-center pl-20 pr-20">
        <div className="basis-1/2 mr-10 animate-fade-in">
          <h1 className="text-xl uppercase mb-6 font-heading">{t('about:title')}</h1>
          <p className="mb-2">{t('about:p1')}</p>
          <p>{t('about:p2')}</p>
        </div>
        <div className="basis-1/2 h-full animate-fade-in">
          <figure className="bg-mmm-about bg-no-repeat bg-contain bg-bottom h-full max-w-sm m-auto"></figure>
        </div>
      </div>
      <Navigation prev="/" next="/work" />
    </Layout>
  );
}

export default About;