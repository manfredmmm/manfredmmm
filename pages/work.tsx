import type { NextPage } from 'next'
import Layout from 'components/layout'
import Navigation from 'components/navigation'
import useTranslation from 'next-translate/useTranslation'

const Work: NextPage = () => {
  const { t } = useTranslation();
  
  return (
    <Layout title={`manfredmmm - ${t('common:work').toLowerCase()}`} textColor="white">
      <div className="bg-gray-darkest text-white-dark h-full lg:h-screen flex justify-center items-center px-10 lg:px-20 py-14 lg:py-0">
        <div className="max-w-xl animate-fade-in">
          <h1 className="text-xl uppercase font-heading mb-4">{t('work:title')}</h1>
          <span className="text-xs uppercase">{t('work:current')}</span>
          <h4 className="mb-1">{t('work:factorial')}</h4>
          <p className="mb-4 text-xs">
            <span className="block text-sm mb-1">{t('work:factorial_description')}</span>
            <span>{t('work:factorial_stack')}</span>
          </p>
          <span className="text-xs uppercase">2017-2022</span>
          <h4 className="mb-1">{t('work:ifs')}</h4>
          <p className="text-xs mb-4">
            <span className="block text-sm mb-1">{t('work:ifs_description')}</span>
            <span>{t('work:ifs_stack')}</span>
          </p>
          <span className="text-xs uppercase">2016-2017</span>
          <h4 className="mb-1">{t('work:beezy')}</h4>
          <p className="text-xs mb-4">
            <span className="block text-sm mb-1">{t('work:beezy_description')}</span>
            <span>{t('work:beezy_stack')}</span>
          </p>
          <span className="text-xs uppercase">2012-2015</span>
          <h4 className="mb-1">{t('work:adverway')}</h4>
          <p className="text-xs mb-4">
            <span className="block text-sm mb-1">{t('work:adverway_description')}</span>
            <span>{t('work:adverway_stack')}</span>
          </p>
          <span className="text-xs uppercase">2011-2012</span>
          <h4 className="mb-1">{t('work:imesmes')}</h4>
          <p className="text-xs mb-4">
            <span className="block text-sm mb-1">{t('work:imesmes_description')}</span>
            <span>{t('work:imesmes_stack')}</span></p>
          <h4 className="mb-1">{t('work:i3dat')}</h4>
          <p className="text-xs mb-4">
            <span className="block text-sm mb-1">{t('work:i3dat_description')}</span>
            <span>{t('work:i3dat_stack')}</span>
          </p>
        </div>
      </div>
      <Navigation prev="/about" next="/can" />
    </Layout>
  );
}
  
export default Work;