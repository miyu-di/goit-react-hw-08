import css from "./Contact.module.css";
import { MdPerson } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";


export const Contact = ({ contact }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <div className={css.card}>
      <div>
        <p className={css.name}>
          <MdPerson className={css.person} />
          {contact.name}
        </p>
        <p className={css.number}>
          <FaPhoneAlt className={css.phone} />
          {contact.number}
        </p>
      </div>
      <button className={css.btn} onClick={() => setIsOpen(true)}>
        Delete
      </button>
      {isOpen && <DeleteModal onClose={closeModal} id={contact.id} />}
    </div>
  );
};
