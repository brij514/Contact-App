import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { FaCirclePlus } from "react-icons/fa6";
// import NoContact from "./components/NoContact";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./firebase/config";
import ContactCard from "./components/ContactCard";
import Modal from "./components/Modal";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import Disclosure from "./hooks/Disclosure";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NoContact from "./components/NoContact";

const App = () => {
  const { isOpen, onClose, onOpen } = Disclosure();
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");

        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactLists);
          return contactLists;
        });
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;
    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      const filteredContacts = contactLists.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );
      setContacts(filteredContacts);
      return filteredContacts;
    });
  };

  return (
    <>
      <div className="mx-auto max-w-[370px] px-4">
        <Navbar />
        <div className="flex gap-2 ">
          <div className="relative flex flex-grow items-center ">
            <FiSearch className="absolute text-white text-2xl ml-1 " />
            <input
              onChange={filterContacts}
              type="Search Contact"
              className=" h-10 flex-grow bg-transparent border border-white rounded-md
                      text-white pl-8"
            />
            
          </div>

          <FaCirclePlus
            onClick={onOpen}
            className="text-5xl cursor-pointer text-white "
          />
        </div>

        <div className="mt-6 gap-4 flex flex-col">
          {contacts.length<=0?<NoContact />: contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
      <AddAndUpdateContact isOpen={isOpen} onClose={onClose} />
      <ToastContainer />
    </>
  );
};

export default App;
