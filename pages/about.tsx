import type { NextPage } from 'next'
import Layout from 'components/layout'
import Navigation from 'components/navigation'
import useTranslation from 'next-translate/useTranslation'

const About: NextPage = () => {
  const { t } = useTranslation();

  return (
    <Layout title="manfredmmm - about">
      <div className="bg-white-darkest h-full flex justify-center items-center">
        <div>
          <h1>{t('about:title')}</h1>
        </div>
      </div>
      <Navigation prev="/" next="/work" />
    </Layout>
  );
}

export default About;