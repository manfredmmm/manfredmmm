import type { NextPage } from 'next'
import Layout from 'components/layout'
import Navigation from 'components/navigation'
import useTranslation from 'next-translate/useTranslation'

const Home: NextPage = () => {
  const { t } = useTranslation();

  return (
    <Layout textColor="white">
      <div className="bg-mmm-home bg-no-repeat bg-center bg-cover h-full flex justify-center items-center">
        <div className="text-white-dark animate-fade-in">
          <div className="flex justify-center">
            <svg className="mb-12 stroke-current text-white-dark" width="200px" height="125px" viewBox="0 0 688 438">
              <path 
                strokeWidth="8" 
                strokeMiterlimit="10" 
                d="M39.899,388.684L242.796,39.625,M242.899,39.684L445.49,389.199,M343.646,213.5L445.979,39.625,M445.979,39.625L647.205,389.2,M647.205,
                389.199c-1.194,0-607.307,0.031-607.307,0.031,M35.149,179.059h618.332">
              </path>
            </svg>
          </div>
          <h2 className="text-center mb-2">
            <span className="mr-1 text-3xl">Hi!</span>
          </h2>
          <h1 className="text-center mb-2">{t("index:home")}</h1>
          <h2 className="text-center mb-5">
            {t("common:greeting")}
            <span className="ml-1 font-extrabold">web</span>
          </h2>
        </div>
      </div>
      <Navigation prev="" next="/about" textColor="white" />
    </Layout>
  );
};

export default Home;