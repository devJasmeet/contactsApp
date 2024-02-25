import React from 'react';
import { IoIosClose } from "react-icons/io";

function Modal({onClose,isOpen,hideFormError,children}) {

    function handleClick() {
        hideFormError();
        onClose();
    }
    
  return (
    
    <>
        {isOpen && (
            <>
                <div className=' z-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3 p-2 max-h-[400px] w-[300px] bg-slate-400 flex flex-col justify-between rounded-md '>
                    <IoIosClose onClick={handleClick} className='self-end cursor-pointer text-xl' />
                    {children}
                </div>
                <div 
                    onClick={handleClick}
                    className=" z-40 absolute top-0 left-0 h-full w-full backdrop-blur-[3px]  " 
                />
                
            </>
        )}
    </>
  );
}

export default Modal
