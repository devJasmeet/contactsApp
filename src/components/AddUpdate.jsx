import React,{useState} from 'react';
import Modal from './Modal';
import {Field, Form, Formik} from "formik";
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { db } from '../Firebase/firebase';



function AddUpdate({isOpen,onClose,isUpdate,contactToUpdate}) {

    
    const [errorFlag,setErrorFlag] = useState(false);
    const formError = "! Name or Email can not be blank";

    function showFormError() {  setErrorFlag(true); }
    function hideFormError() {  setErrorFlag(false); }

    const  addContact = async (contact) => {
        try {
            const contactRef = collection(db,"contact-details");
            await addDoc(contactRef,contact);
        } catch (error) {
            console.log(error);
        }
    }

    const updateContact = async (contact,id) => {
        try {
            const contactRef = doc(db,"contact-details",id);
            await updateDoc(contactRef,contact);
            
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <>
        <div>
            <Modal onClose={onClose} isOpen={isOpen} hideFormError={hideFormError}>
                <Formik
                    initialValues={ isUpdate ? 
                        {
                            name:contactToUpdate.name,
                            email:contactToUpdate.email
                        }:
                        {
                            name:"",
                            email:""
                        }
                    }
                    onSubmit={(values) => {
                        console.log(errorFlag);
                        
                        if(values.name != '' && values.email != '') {
                            console.log('done');
                            //isUpdate ? updateContact(values,contactToUpdate.id) : addContact(values);
                            hideFormError();
                            onClose();
                        } else {
                            console.log('Name and email is required');
                            showFormError();
                        }
                    }}
                >
                    <Form>
                        <div className=' flex flex-col gap-1 text-sm '>
                            {errorFlag && <div className='text-red-700 text-xs self-center p-1'>{formError}</div>}
                            <label htmlFor='name'>Name</label>
                            <Field name="name" className=" py-1 px-2 rounded-sm" />
                            <label htmlFor='email'>Email</label>                            
                            <Field name="email" className=" py-1 px-2 rounded-sm" />
                        
                            <button  className='text-white bg-slate-700 hover:bg-blue-600 mt-2 px-3 text-sm font-semibold rounded-lg self-center '>
                                {isUpdate? "UPDATE" : "ADD"}
                            </button>
                        </div>
                    </Form>
                </Formik>
                
            </Modal>
        </div>
    </>
  )
}

export default AddUpdate
