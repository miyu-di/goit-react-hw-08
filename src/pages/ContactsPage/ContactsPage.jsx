import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import { SearchBox } from "../../components/SearchBox/SearchBox";
import { ContactList } from "../../components/ContactList/ContactList";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import css from "./ContactsPage.module.css"

export default function ContactsPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.div}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {error && <b>Oops! Something went wrong...</b>}
      {loading && <b>Loading...</b>}
      <ContactList />
    </div>
  );
}
