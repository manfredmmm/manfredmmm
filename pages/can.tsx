import type { NextPage } from 'next'
import React, { useState } from 'react'
import Layout from 'components/layout'
import Navigation from 'components/navigation'
import useTranslation from 'next-translate/useTranslation'
import skillsData from 'data/can-i-use.json'
import Skill from 'components/skill-data'

const Can: NextPage = () => {
  const { t } = useTranslation();
  const [query, setQuery] = useState('');
  return (
    <Layout title={`manfredmmm - ${t('common:can').toLowerCase()}`} page="can">
      <div className="bg-white-darkest h-full flex justify-center items-center px-10 lg:px-20 py-14">
        <div className="animate-fade-in lg:w-3/4">
          <div className="w-full bg-gray-darkest text-center text-white-darkest h-16 mb-2 flex justify-center items-center">
            <h3 className="font-semibold text-2xl">{t('can:title')}</h3>
            <input 
              type="text"
              placeholder="skill (ask me for html or js)"
              className="text-sm w-1/3 h-2/3 text-center bg-gray-darkest mx-3 border-b-2 border-white text-white-darkest outline-0 transition animate-fade-in hover:bg-gray-dark"
              onChange={e => setQuery(e.target.value.toLowerCase())}
              value={query}
            ></input>
            <span className="font-semibold text-2xl">?</span>
          </div>
          <div className="w-full bg-gray text-gray-darkest p-8 lg:grid lg:grid-cols-3 lg:gap-2">
            {skillsData.skills
              .filter(item => 
                item.name.toLowerCase().includes(query) || 
                item.keys.map(k => k.toLowerCase()).includes(query)
              )
              .map((skill, index) => (
                <Skill
                  key={index}
                  name={skill.name}
                  items={skill.keys}
                />
              ))
            }
          </div>
        </div>
      </div>
      <Navigation prev="/work" next="/contact" />
    </Layout>
  );
}
  
export default Can;