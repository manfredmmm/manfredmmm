import type { NextPage } from 'next'
import Layout from 'components/layout'
import Navigation from 'components/navigation'
import useTranslation from 'next-translate/useTranslation'

const Can: NextPage = () => {
  const { t } = useTranslation();

  return (
    <Layout title={`manfredmmm - ${t('common:can').toLowerCase()}`}>
      <div className="bg-white-darkest h-full flex justify-center items-center">
        <div className="animate-fade-in">
          <h1>{t('can:title')}</h1>
        </div>
      </div>
      <Navigation prev="/work" next="/contact" />
    </Layout>
  );
}
  
export default Can;