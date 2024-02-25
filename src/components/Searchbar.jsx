import React from 'react';
import {FiSearch} from "react-icons/fi";
import { AiFillPlusCircle} from "react-icons/ai";


function Searchbar({onOpen,filteredContacts}) {
  
  return (
    <div>
      <div className='flex gap-4 mb-3'>
            <div className='relative flex flex-grow items-center font-medium'>
                <FiSearch className='absolute ml-2'/>
                <input 
                  onChange={filteredContacts}
                  type='text'
                  className='border border-black h-8 flex-grow rounded-md pl-7'
                />
            </div>
            <div>
                <AiFillPlusCircle 
                  onClick={onOpen}
                  className='text-3xl cursor-pointer text-slate-500 '/>
            </div>
        </div>
    </div>
  )
}

export default Searchbar
