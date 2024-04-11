import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./DeleteModal.module.css"

export default function DeleteModal({id, onClose}) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <div className={css.backdrop}>
      <div className={css.container}>
        <p className={css.text}>
          Are you sure you want to delete that contact?
        </p>
        <ul className={css.btns}>
          <li>
            <button className={css.btn} onClick={handleDelete}>
              Proceed
            </button>
          </li>
          <li>
            <button className={css.btn} onClick={onClose}>
              Refuse
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
