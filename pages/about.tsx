import type { NextPage } from 'next'
import Layout from 'components/layout'
import Navigation from 'components/navigation'

const About: NextPage = () => {
  return (
    <Layout>
      <div className="bg-white-dark h-full">
        <div className="flex justify-center content-center">
          <div>
            <h1>About</h1>
            <p>lorem ipsum</p>
          </div>
        </div>
      </div>
      <Navigation prev="/" next="/work" />
    </Layout>
  );
}

export default About;