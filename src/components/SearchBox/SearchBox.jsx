import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

export const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div>
      <p className={css.parag}>Find contact by name</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};
