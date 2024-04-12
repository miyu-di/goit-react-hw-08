import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./DeleteModal.module.css"
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("Your contact has been deleted");

export default function DeleteModal({id, onClose}) {
  const dispatch = useDispatch();

  const handleDelete = () => {dispatch(deleteContact(id)), notify()};
  return (
    <div className={css.backdrop}>
      <div className={css.container}>
        <p className={css.text}>
          Are you sure you want to delete that contact?
        </p>
        <ul className={css.btns}>
          <li>
            <button className={css.agree} onClick={handleDelete}>
              Yes
            </button>
          </li>
          <li>
            <button className={css.disagree} onClick={onClose}>
              Do not
            </button>
            <Toaster position="top-center" reverseOrder={false} />
          </li>
        </ul>
      </div>
    </div>
  );
}
