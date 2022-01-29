import type { NextPage } from 'next'
import Layout from 'components/layout'
import Navigation from 'components/navigation'
import useTranslation from 'next-translate/useTranslation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithubAlt, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import styles from 'components/contact.module.css';

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
          <div className="flex flex-row text-center space-x-4">
            <div className="w-1/4 text-center">
              <a className="bg-gray-dark rounded-full block" href="https://www.linkedin.com/in/manfredmmm" rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faLinkedinIn} className={styles.social} />
              </a>
            </div>
            <div className="w-1/4 text-center">
              <a className="bg-gray-dark rounded-full block" href="https://github.com/manfredmmm" rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faGithubAlt} className={styles.social} />
              </a>
            </div>
            <div className="w-1/4 text-center">
              <a className="bg-gray-dark rounded-full block" href="https://twitter.com/manfredmmm" rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faTwitter} className={styles.social} />
              </a>
            </div>
            <div className="w-1/4 text-center">
              <a className="bg-gray-dark rounded-full block" href="https://www.instagram.com/manfredmmm/" rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faInstagram} className={styles.social} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Navigation prev="/can" next="" textColor="white" />
    </Layout>
  );
}
  
export default Contact;