import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = () => {
  return (
    <div className='searchBox d-flex align-items-center '>
        <SearchIcon/>
        <input type="text" placeholder='Search here ...' />
    </div>
  )
}

export default SearchBox  