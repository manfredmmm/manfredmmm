import type { NextPage } from 'next'
import Layout from 'components/layout'
import Navigation from 'components/navigation'

const Can: NextPage = () => {
  return (
    <Layout title="manfredmmm - can">
      <div className="bg-white-darkest h-full flex justify-center items-center">
        <div>
          <h1>Can</h1>
        </div>
      </div>
      <Navigation prev="/work" next="/contact" />
    </Layout>
  );
}
  
export default Can;