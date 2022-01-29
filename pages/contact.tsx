import type { NextPage } from 'next'
import Layout from 'components/layout'
import Navigation from 'components/navigation'
import useTranslation from 'next-translate/useTranslation'

const Contact: NextPage = () => {
  const { t } = useTranslation();

  return (
    <Layout title={`manfredmmm - ${t('common:contact').toLowerCase()}`} textColor="white">
      <div className="bg-gray-darkest text-white-dark h-full flex justify-center items-center">
        <div>
          <h1 className="text-xl font-heading text-center mb-10 uppercase pb-2 border-b-2">{t('contact:title')}</h1>
          <p className="mb-5 text-center">
            <a href={`mailto:${t('contact:email')}`}>{t('contact:email')}</a>
          </p>
          <p className="text-center mb-10">
            <a href="">{t('contact:cv')}</a>
          </p>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/manfredmmm" rel="noreferrer" target="_blank"><i className="fa fa-linkedin"></i></a>
            </li>
          </ul>
        </div>
      </div>
      <Navigation prev="/can" next="" textColor="white" />
    </Layout>
  );
}
  
export default Contact;