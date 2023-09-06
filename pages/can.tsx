import type { NextPage } from 'next'
import React, { useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import Layout from 'components/layout'
import Navigation from 'components/navigation'
import Skill from 'components/skill-data'
import skillsData from 'data/can-i-use.json'

const Can: NextPage = () => {
  const { t } = useTranslation();
  const [query, setQuery] = useState('');
  const [filteredSkills, setSkills] = useState(skillsData.skills);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    let searchValue = event.target.value.toLowerCase();
    setQuery(searchValue);
    setSkills(
      skillsData.skills
        .filter((item: any) => item.items.includes(searchValue) || item.name.includes(searchValue) || searchValue === '')
    );
  }

  return (
    <Layout title={`manfredmmm - ${t('common:can').toLowerCase()}`} page="can">
      <div className="bg-white-darkest flex justify-center items-center px-10 lg:px-20 py-14">
        <div className="animate-fade-in lg:w-3/4">
          <div className="w-full bg-gray-darkest text-center text-white-darkest h-16 mb-2 flex justify-center items-center">
            <h3 className="font-semibold text-2xl">{t('can:title')}</h3>
            <input 
              type="text"
              placeholder="skill (ask me for html or js)"
              className="text-sm w-1/3 h-2/3 text-center bg-gray-darkest mx-3 border-b-2 border-white text-white-darkest outline-0 transition animate-fade-in hover:bg-gray-dark"
              onChange={handleSearch}
              value={query}
            ></input>
            <span className="font-semibold text-2xl">?</span>
          </div>
          <div className="w-full bg-gray text-gray-darkest p-8 lg:grid lg:grid-cols-3 lg:gap-2">
            {filteredSkills.map((skill, index) => 
              <Skill
                key={index}
                name={skill.name}
                items={skill.items}
              />
            )}
            <span className={`${filteredSkills.length === 0 ? 'block' : 'hidden'}`}>
              {t('can:no_data')}
              <span className="ml-2">😊</span>
            </span>
          </div>
        </div>
      </div>
      <Navigation prev="/work" next="/contact" />
    </Layout>
  );
}
  
export default Can;