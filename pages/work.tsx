import type { NextPage } from 'next'
import Layout from 'components/layout'
import Navigation from 'components/navigation'
import useTranslation from 'next-translate/useTranslation'

const Work: NextPage = () => {
  const { t } = useTranslation();
  return (
    <Layout title={`manfredmmm - ${t('common:work').toLowerCase()}`}>
      <div className="bg-white-darkest h-full flex justify-center items-center">
        <div className="max-w-xl">
          <h1 className="text-xl uppercase font-heading">{t('work:title')}</h1>
          <p className="text-xs uppercase mb-4 mt-8">{t('work:current')}</p>
          <h4 className="mb-1">{t('work:ifs')}</h4>
          <p className="text-xs mb-4">{t('work:ifs_description')}</p>
          <p className="text-xs uppercase mb-4 mt-8">{t('work:previous')}</p>
          <h4 className="mb-1">{t('work:beezy')}</h4>
          <p className="text-xs mb-4">{t('work:beezy_description')}</p>
          <h4 className="mb-1">{t('work:adverway')}</h4>
          <p className="text-xs mb-4">{t('work:adverway_description')}</p>
          <h4 className="mb-1">{t('work:imesmes')}</h4>
          <p className="text-xs mb-4">
            <span>{t('work:imesmes_description')}</span>
            <br />
            <span>{t('work:imesmes_description_2')}</span>
          </p>
          <h4 className="mb-1">{t('work:i3dat')}</h4>
          <p className="text-xs mb-4">{t('work:i3dat_description')}</p>
        </div>
      </div>
      <Navigation prev="/about" next="/can" />
    </Layout>
  );
}
  
export default Work;