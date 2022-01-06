import type { NextPage } from 'next'
import Layout from 'components/layout'
import Navigation from 'components/navigation'

const Work: NextPage = () => {
  return (
    <Layout title="manfredmmm - work">
      <div className="bg-white-darkest h-full flex justify-center items-center">
        <div>
          <h1>Work</h1>
        </div>
      </div>
      <Navigation prev="/about" next="/can" />
    </Layout>
  );
}
  
export default Work;