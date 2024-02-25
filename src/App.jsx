import React,{ useState,useEffect } from 'react'
import Headingbar from './components/Headingbar';

import { db } from './Firebase/firebase';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import Searchbar from './components/Searchbar';
import Card from './components/Card';
import Modal from './components/Modal';
import AddUpdate from './components/AddUpdate';
import openClose from './Hooks/openClose';


function App() {
    const [contacts,setContacts] = useState([]);
    const {isOpen,onClose,onOpen} = openClose();

    useEffect(() => {
        const getContacts = async() => {
            try {
                //console.log("Hello");
                const contactRef = collection(db,"contact-details");

                onSnapshot(contactRef,(snapshot) => {
                    const contactList = snapshot.docs.map((doc) => {
                        return {
                            id : doc.id,
                            ...doc.data()
                        }
                    });

                    setContacts(contactList);
                    return contactList;
                });
                
            } catch (error) {
                console.log(error);
            }
        };

        getContacts();
    },[]);

    function filteredContacts(e) {
        const value = e.target.value;
        const contactRef = collection(db,"contact-details");

        onSnapshot(contactRef,(snapshot) => {
        const contactList = snapshot.docs.map((doc) => {
            return {
                id : doc.id,
                ...doc.data()
            }
        });
        const filteredContact = contactList.filter((contact) => 
            contact.name.toLowerCase().includes(value.toLowerCase()) ||
            contact.email.toLowerCase().includes(value.toLowerCase())
        );
        setContacts(filteredContact);
        });
    }

  return (
    <>
        <div className='mx-auto max-w-[380px]'>
            <Headingbar />
            <Searchbar onOpen={onOpen} filteredContacts={filteredContacts} />
            
            <div className='border-t-4  '> {
                contacts.map((contact) => (
                    <Card key={contact.id} contact={contact} />
                ))}
            </div>
            
        </div>
        <AddUpdate onClose={onClose} isOpen={isOpen}/>
        
    </>
  )
}

export default App;