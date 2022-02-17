import React, { useEffect, useState } from 'react'

import './Navigation.css'

function Navigation() {
    // create useState for mainMenu
    // set mainMenu result to mainMenu state
    // map mainMenu
    
    const [mainMenu, setMainMenu] = useState()
    const [categories, setCategories] = useState()
    const [activeCategory, setActiveCategory] = useState(false)

    useEffect(async () => {
        const res = await fetch('https://api.jsonbin.io/b/620cf84f4bf50f4b2dfe818f')
        const data = await res.json()
        console.log(data)

        setMainMenu(data.mainMenu)
        setCategories(data.categories)
    }, [])

  return (
    <>
      <ul className='navigation'>
        {mainMenu?.map((item, i) => 
        <li key={`${item}_${i}`}>
            <p>{item}</p>
        </li>
        )}
      </ul>
      <ul className='categories'>
          {categories?.map((item,i) =>
          <li key={`${item}_${i}`}
            onMouseEnter={() => setActiveCategory(i)}
            onMouseLeave={() => setActiveCategory(null)}
          >
              <h1>{item.name}</h1>
              <div className={`sub-cat ${activeCategory === i ? 'visible' : ''}`}>
                {item.subcategories.map((sub, j) =>
                  <p key={`${sub}_${j}`}>{sub}</p>
                )}
              </div>
          </li>
          )}
      </ul>
    </>
  )
}

export default Navigation