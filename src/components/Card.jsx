import { deleteDoc, doc } from 'firebase/firestore';
import React from 'react';
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { db } from '../Firebase/firebase';
import openClose from '../Hooks/openClose';
import AddUpdate from './AddUpdate';


function Card({contact}) {

  const {isOpen,onClose,onOpen} = openClose();

  async function delContact(id) {
    try {
      await deleteDoc(doc(db,"contact-details",id))
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <div className='  '>
        <div key={contact.id} className='flex px-1.5 border-b gap-2 items-center' >
          <div className=' bg-slate-600 text-white min-w-[30px] min-h-[30px] flex text-sm justify-center items-center rounded-full'>
            {contact.name[0].toUpperCase()}
          </div>
          <div className='py-1 flex flex-col flex-grow '>       
            <p className=' text-sm font-medium' >{contact.name}</p>
            <p className=' text-xs ' >{contact.email}</p>
          </div> 
          <div className=' items-center flex py-1 gap-2'>
            <MdEdit onClick={onOpen} className='hover:text-blue-500 cursor-pointer' />
            <MdDelete onClick={() =>delContact(contact.id)} className=' hover:text-red-500 cursor-pointer' />
          </div>
        </div>
      </div>
      <AddUpdate onClose={onClose} isOpen={isOpen} isUpdate contactToUpdate={contact}/>
    </>
  )
}

export default Card
