import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { HiOutlineUserCircle } from "react-icons/hi";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";
import AddAndUpdateContact from "./AddAndUpdateContact";
import Disclosure from "../hooks/Disclosure";
import { toast } from "react-toastify";

const ContactCard = ({ contact }) => {
  const { isOpen, onClose, onOpen } = Disclosure();
  const deleteCard = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div
        key={contact.id}
        className="flex bg-yellow justify-between items-center p-2 rounded-lg"
      >
        <div className="flex gap-2.4">
          <HiOutlineUserCircle className="text-5xl pr-2 text-orange" />
          <div className="">
            <h2 className="font-medium">{contact.name}</h2>
            <p className="text-sm">{contact.email}</p>
          </div>
        </div>

        <div className="flex justify-end gap-3 ">
          <RiEditCircleLine
            onClick={onOpen}
            className="text-3xl cursor-pointer"
          />
          <IoMdTrash
            onClick={() => deleteCard(contact.id)}
            className="text-3xl cursor-pointer text-orange"
          />
        </div>
      </div>
      <AddAndUpdateContact
        contact={contact}
        isUpdate
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export default ContactCard;
