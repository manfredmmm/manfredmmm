import type { NextPage } from 'next'
import Layout from 'components/layout'
import Navigation from 'components/navigation'

const Contact: NextPage = () => {
  return (
    <Layout>
      <div className="bg-gray-darkest text-white-dark h-full flex justify-center items-center">
        <div>
          <h1>Contact</h1>
        </div>
      </div>
      <Navigation prev="/can" next="" />
    </Layout>
  );
}
  
export default Contact;