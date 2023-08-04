import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

const FilterBar = () => {
  return (
    <div className='h-100 d-flex align-items-center'>
      <div className='d-flex justify-content-around align-items-center gap-6'>
        <div className='search-bar'>
          <input type="text" placeholder='Search...' className='pe-6 ps-3 py-2 me-3 rounded-3'/>
          <FontAwesomeIcon icon={faSearch} className='mt-2'/>
        </div>
        <div className='filters d-flex gap-5'>
          <select className='px-3 bg-light border-0 p-1 rounded-1'>
            <option value="category">For Sale</option>
          </select>
          <select className='px-3 bg-light border-0 p-1 rounded-1'>
            <option value="type">Type: House</option>
          </select>
          <select className='px-3 bg-light border-0 p-1 rounded-1'>
            <option value="minP">Min Price: R1m</option>
          </select>
          <select className='px-3 bg-light border-0 p-1 rounded-1'>
            <option value="maxP">Max Price: R3m</option>
          </select>
          <select className='px-3 bg-light border-0 p-1 rounded-1'>
            <option value="bedrooms">Bedrooms: 3</option>
          </select>
        </div>
        <div className='user'>
          <FontAwesomeIcon icon={faHeart} className='mb-1 me-5'/>
          <FontAwesomeIcon icon={faUser} className='mt-2 fs-3'/>
        </div>
      </div>
    </div>
  )
}

export default FilterBar