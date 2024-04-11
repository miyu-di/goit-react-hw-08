import { useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import css from './ContactList.module.css'
import { selectFilteredContacts } from "../../redux/contacts/selectors";

export const ContactList = () => {
const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};
